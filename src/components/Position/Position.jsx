import React, { useEffect, useState } from "react";
import "./Position.scss";
import ModalForm from "../ModalForm/ModalForm";
 
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

const Position = ({ selectedDepartment }) => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!selectedDepartment) return;

    const fetchVacancies = async () => {
      try {
        const res = await fetch(
          "https://hr.centralasian.uz/api/cliveland/vacancies"
        );
        const data = await res.json();

        const vacanciesArray = Array.isArray(data) ? data : data.data || [];
        const apiCategory = departmentMap[selectedDepartment];

        const filtered = vacanciesArray.filter(
          (v) => v.category && v.category === apiCategory
        );

        setVacancies(filtered);
      } catch (err) {
        console.error("Ошибка при загрузке вакансий:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, [selectedDepartment]);

  if (loading) return <p>Загрузка вакансий...</p>;
  if (!selectedDepartment)
    return <p>Выберите отделение, чтобы увидеть вакансии.</p>;
  if (vacancies.length === 0)
    return <p>Нет вакансий для выбранного отделения.</p>;

  return (
    <>
      <div className="position">
        <div className="container">
          {vacancies.map((job) => (
            <div key={job.id} className="position__wrapper">
              <div className="position__wrap">
                <div className="card1">
                <h1>{job.title}</h1>
                <div className="card1__content-ul">
                  <ul className="card1__ul">
                    <p>Место работы:</p>
                    <p>Направление:</p>
                    <p>Отделение:</p>
                    <p>Тип контракта:</p>
                  </ul>
                  <ul className="card1__ul">
                    <p>Ташкент, Узбекистан</p>
                    <p>{job.title}</p>
                    <p>{job.category}</p>
                    <p>Полная ставка</p>
                  </ul>
                </div>
              </div>

              <div
                className="card2"
                dangerouslySetInnerHTML={{ __html: job.body }}
              />

              <div
                className="card4"
                dangerouslySetInnerHTML={{ __html: job.requirements }}
              />

              <div
                className="card5"
                dangerouslySetInnerHTML={{ __html: job.conditions }}
              />
              </div>

              <div className="position__btn-flex">
                <p>Кандидатов: {job.onWaitingList}</p>
                <button className="position__btn" onClick={openModal}>
                  Присоединиться к резерву
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalForm isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Position;
