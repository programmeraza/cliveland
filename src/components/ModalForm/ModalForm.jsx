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
  const location = useLocation();
  const [previewUrl, setPreviewUrl] = useState("");

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

  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);

      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
      } else {
        setPreviewUrl("");
      }
    } else {
      setFormData((prev) => ({ ...prev, resume: null }));
      setFileName("");
      setPreviewUrl("");
    }
    setTouched((prev) => ({ ...prev, resume: true }));
  };


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "resume",
      "name",
      "surname",
      "phone",
      "email",
      "country",
      "education",
      "interest",
    ];

    if (location.pathname !== "/vacancy") {
      requiredFields.push("vacancy");
    }

    const hasError = requiredFields.some((field) => !formData[field]);

    if (hasError || !formData.agree) {
      setError(t("modal.form.error"));
      setTouched(
        requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
      );
      return;
    }

    setError("");
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  const isInvalid = (field) => touched[field] && !formData[field];

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
            <div className="modal-text-svg">
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
            </div>
            <p>{t("modal.description.info")}</p>
          </div>
          <p>{t("modal.description.details")}</p>
        </div>

        <h3 className="modal-title2">{t("modal.title2")}</h3>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          {location.pathname !== "/vacancy" && (
            <div className="modal-field">
              <label>{t("modal.form.vacancy")}</label>
              <select
                name="vacancy"
                value={formData.vacancy}
                onChange={handleInputChange}
                className={isInvalid("vacancy") ? "select-error shake" : ""}
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
              {isInvalid("vacancy") && (
                <p className="field-error">{t("modal.form.errorField")}</p>
              )}
            </div>
          )}

          <div className="modal-field-file">
            <label>{t("modal.form.resume")}</label>
            <div
              className={`file-upload ${isInvalid("resume") ? "input-error shake" : ""
                }`}
            >
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx,.png,.jpeg"
                onChange={handleFileChange}
              />
              <div className="file-upload__content">
                {previewUrl ? (
                  <div className="file-preview">
                    <img src={previewUrl} alt="preview" className="file-preview__image" />
                    <p className="file-preview__name">{fileName}</p>
                  </div>
                ) : fileName ? (
                  <div className="file-preview">
                    <div className="file-preview__icon">
                      📄
                    </div>
                    <p className="file-preview__name">{fileName}</p>
                  </div>
                ) : (
                  <>
                    <strong>{t("modal.form.resumeUpload")}</strong>
                    <p>{t("modal.form.resumeSize")}</p>
                  </>
                )}
              </div>

            </div>
            {isInvalid("resume") && (
              <p className="field-error">{t("modal.form.errorFile")}</p>
            )}
          </div>

          <div className="modal-grid">
            {["name", "surname", "phone", "email"].map((field) => (
              <div key={field} className="modal-field">
                <label>{t(`modal.form.${field}`)}</label>
                <input
                  name={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                        ? "tel"
                        : "text"
                  }
                  placeholder={t(`modal.form.${field}Placeholder`)}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={isInvalid(field) ? "input-error shake" : ""}
                />
                {isInvalid(field) && (
                  <p className="field-error">{t("modal.form.errorField")}</p>
                )}
              </div>
            ))}
          </div>

          {["country", "education", "interests"].map((field) => (
            <div key={field} className="modal-field">
              <label>{t(`modal.form.${field}`)}</label>
              {field === "country" ? (
                <input
                  name={field}
                  type="text"
                  placeholder={t(`modal.form.${field}Placeholder`)}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={isInvalid(field) ? "input-error shake" : ""}
                />
              ) : (
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={isInvalid(field) ? "select-error shake" : ""}
                >
                  <option value="">
                    {t(`modal.form.${field}Placeholder`)}
                  </option>
                  {field === "education" ? (
                    <>
                      <option>{t("modal.education.bachelor")}</option>
                      <option>{t("modal.education.master")}</option>
                      <option>{t("modal.education.doctorate")}</option>
                    </>
                  ) : (
                    <>
                      <option>{t("modal.interests.football")}</option>
                      <option>{t("modal.interests.chess")}</option>
                      <option>{t("modal.interests.drawing")}</option>
                    </>
                  )}
                </select>
              )}
              {isInvalid(field) && (
                <p className="field-error">{t("modal.form.errorField")}</p>
              )}
            </div>
          ))}

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

          <div className="modal-submit-wrapper">
            <button type="submit" className="modal-submit">
              {t("modal.form.submit")}
            </button>
          </div>
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
