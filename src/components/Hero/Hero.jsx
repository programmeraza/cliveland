import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Hero.scss";

const departmentMap = {
  "Отделение анестезиологии": "Department of Anesthesiology",
  "Отделение кардиологии": "Department of Cardiology",
  "Отделение неврологии": "Department of Neurology",
  "Отделение онкологии": "Department of Oncology",
  "Отделение педиатрии": "Department of Pediatrics",
  "Отделение хирургии": "Department of Surgery",
  "Отделение терапии": "Department of Therapy",
  "Отделение урологии": "Department of Urology",
  "Отделение гинекологии": "Department of Gynecology",
  "Отделение дерматологии": "Department of Dermatology",
  "Отделение гастроэнтерологии": "Department of Gastroenterology",
  "Отделение эндокринологии": "Department of Endocrinology",
  "Отделение офтальмологии": "Department of Ophthalmology",
  "Отделение травматологии": "Department of Traumatology",
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Список отделений [{ru, en}]
  const departments = Object.entries(departmentMap).map(([ru, en]) => ({
    ru,
    en,
  }));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Проверяем, на каком языке пишет пользователь (рус/латиница)
  const isEnglishInput = /^[A-Za-z\s]+$/.test(query);

  // Фильтрация — ищет и по русским, и по английским названиям
  const filtered = departments.filter(
    (dep) =>
      dep.ru.toLowerCase().includes(query.toLowerCase().trim()) ||
      dep.en.toLowerCase().includes(query.toLowerCase().trim())
  );

  const handleSearch = (selected) => {
    if (!selected) return;

    const selectedDep =
      departments.find(
        (dep) =>
          dep.ru === selected ||
          dep.en === selected ||
          t(dep.ru) === selected ||
          t(dep.en) === selected
      ) || {};

    const ruName = selectedDep.ru;
    const apiCategory = selectedDep.en;

    if (!ruName || !apiCategory) return;

    setQuery(selected);
    setIsOpen(false);

    navigate("/vacancy", {
      state: {
        selectedDepartment: ruName,
        apiCategory,
      },
    });
  };

  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
          </div>

          <div className="hero__inp-flex">
            <div className="hero__inp" ref={dropdownRef}>
              <input
                ref={inputRef}
                type="text"
                placeholder={t("hero.placeholder")}
                value={query}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
              />
              <img src="./search.svg" alt="search" />

              {isOpen && query && (
                <div
                  className="hero__dropdown"
                  style={
                    filtered.length === 0
                      ? {
                          backgroundImage: "url('./not-found.png')",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "40% auto",
                          height: "300px",
                        }
                      : {}
                  }
                >
                  {filtered.length > 0 &&
                    filtered.map((dep, index) => {
                      // Показываем язык в зависимости от того, на каком языке введён запрос
                      const displayText = isEnglishInput ? dep.en : dep.ru;
                      return (
                        <div
                          key={index}
                          className="hero__dropdown-item"
                          onClick={() => handleSearch(displayText)}
                        >
                          {displayText}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            <button className="hero__btn" onClick={() => handleSearch(query)}>
              {t("hero.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
