import React, { useEffect, useState } from "react";
import "./ModalForm.scss";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const location = useLocation(); // <-- определяем текущий путь

  const [formData, setFormData] = useState({
    vacancy: "",
    resume: null,
    name: "",
    surname: "",
    phone: "",
    email: "",
    country: "",
    education: "",
    interest: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
    } else {
      setFormData((prev) => ({ ...prev, resume: null }));
      setFileName("");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (!formData.vacancy && location.pathname !== "/vacancy") || // <-- если не на /vacancy, то vacancy обязателен
      !formData.resume ||
      !formData.name ||
      !formData.surname ||
      !formData.phone ||
      !formData.email ||
      !formData.country ||
      !formData.education ||
      !formData.interest ||
      !formData.agree
    ) {
      setError(t("modal.form.error"));
      return;
    }

    setError("");
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={stopPropagation}>
        <div className="modal__top">
          <h1 className="modal-title">{t("modal.title")}</h1>
          <button className="modal-close" onClick={onClose}>
            <IoCloseOutline size={28} />
          </button>
        </div>

        <div className="modal-description">
          <div className="modal-text">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12ZM12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7ZM11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15H12.008C12.2732 15 12.5276 15.1054 12.7151 15.2929C12.9026 15.4804 13.008 15.7348 13.008 16C13.008 16.2652 12.9026 16.5196 12.7151 16.7071C12.5276 16.8946 12.2732 17 12.008 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16Z"
                fill="#505050"
              />
            </svg>
            <p>{t("modal.description.info")}</p>
          </div>
          <p>{t("modal.description.details")}</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {/* Показываем select только если НЕ на /vacancy */}
          {location.pathname !== "/vacancy" && (
            <div className="modal-field">
              <label>{t("modal.form.vacancy")}</label>
              <select
                name="vacancy"
                value={formData.vacancy}
                onChange={handleInputChange}
              >
                <option value="">
                  {t("modal.form.vacancyPlaceholder")}
                </option>
                <option>{t("modal.vacancies.therapist")}</option>
                <option>{t("modal.vacancies.surgeon")}</option>
                <option>{t("modal.vacancies.pediatrician")}</option>
                <option>{t("modal.vacancies.urologist")}</option>
                <option>{t("modal.vacancies.dermatologist")}</option>
                <option>{t("modal.vacancies.neurologist")}</option>
              </select>
            </div>
          )}

          <div className="modal-field-file">
            <label>{t("modal.form.resume")}</label>
            <div className="file-upload">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx,.png,.jpeg"
                onChange={handleFileChange}
              />
              <div className="file-upload__content">
                <strong>
                  {fileName ? fileName : t("modal.form.resumeUpload")}
                </strong>
                {!fileName && <p>{t("modal.form.resumeSize")}</p>}
              </div>
            </div>
          </div>

          <div className="modal-grid">
            <div className="modal-field">
              <label>{t("modal.form.name")}</label>
              <input
                name="name"
                type="text"
                placeholder={t("modal.form.namePlaceholder")}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-field">
              <label>{t("modal.form.surname")}</label>
              <input
                name="surname"
                type="text"
                placeholder={t("modal.form.surnamePlaceholder")}
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-field">
              <label>{t("modal.form.phone")}</label>
              <input
                name="phone"
                type="tel"
                placeholder={t("modal.form.phonePlaceholder")}
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-field">
              <label>{t("modal.form.email")}</label>
              <input
                name="email"
                type="email"
                placeholder={t("modal.form.emailPlaceholder")}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="modal-field">
            <label>{t("modal.form.country")}</label>
            <input
              name="country"
              type="text"
              placeholder={t("modal.form.countryPlaceholder")}
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>

          <div className="modal-field">
            <label>{t("modal.form.education")}</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleInputChange}
            >
              <option value="">
                {t("modal.form.educationPlaceholder")}
              </option>
              <option>{t("modal.education.bachelor")}</option>
              <option>{t("modal.education.master")}</option>
              <option>{t("modal.education.doctorate")}</option>
            </select>
          </div>

          <div className="modal-field">
            <label>{t("modal.form.interests")}</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
            >
              <option value="">
                {t("modal.form.interestsPlaceholder")}
              </option>
              <option>{t("modal.interests.football")}</option>
              <option>{t("modal.interests.chess")}</option>
              <option>{t("modal.interests.drawing")}</option>
            </select>
          </div>

          <div className="modal-checkbox">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agree">
              {t("modal.form.agree")}{" "}
              <Link to={"/policy"}>{t("modal.form.privacyPolicy")}</Link>
            </label>
          </div>

          {error && <p className="modal-error">{error}</p>}

          <button type="submit" className="modal-submit">
            {t("modal.form.submit")}
          </button>
        </form>

        {showSuccessModal && (
          <div className="success-overlay">
            <div className="success-window">
              <div className="success-close-flex">
                <h2>{t("modal.form.success.title")}</h2>
                <button className="modal-close" onClick={closeSuccessModal}>
                  <IoCloseOutline size={28} />
                </button>
              </div>
              <p>{t("modal.form.success.message")}</p>
              <button className="success-btn" onClick={closeSuccessModal}>
                {t("modal.form.success.button")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
