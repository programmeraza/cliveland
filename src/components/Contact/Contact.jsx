import React, { useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error(t('components.contact.form.validationError'));
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://hr.centralasian.uz/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Ошибка при отправке формы");
      }

      toast.success(t('components.contact.form.success'));
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error(t('components.contact.form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__call">
            <h1>{t('components.contact.title')}</h1>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__card-img">
                  <img src="./call1.svg" alt="" />
                </div>
                <h3>{t('components.contact.cards.email.title')}</h3>
                <p>{t('components.contact.cards.email.description')}</p>
                <Link to="#">
                  <strong>{t('components.contact.cards.email.email')}</strong>
                </Link>
              </div>

              <div className="contact__card">
                <div className="contact__card-img">
                  <img src="./call2.svg" alt="" />
                </div>
                <h3>{t('components.contact.cards.address.title')}</h3>
                <strong>
                  {t('components.contact.cards.address.address').split(',').map((line, index) => (
                    <React.Fragment key={index}>
                      {line.trim()}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </strong>
              </div>

              <div className="contact__card">
                <div className="contact__card-img">
                  <img src="./call3.svg" alt="" />
                </div>
                <h3>{t('components.contact.cards.social.title')}</h3>
                <p>{t('components.contact.cards.social.description')}</p>
                <div className="contact__icon-flex">
                  <Link to="#">
                    <img src="./twitter.svg" alt="" />
                  </Link>
                  <Link to="#">
                    <img src="./in.svg" alt="" />
                  </Link>
                  <Link to="#">
                    <img src="./instagram.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__message">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h1>{t('components.contact.form.title')}</h1>

              <div className="contact__inp-flex">
                <label htmlFor="yourName">
                  {t('components.contact.form.name')} <span>*</span>
                </label>
                <input
                  id="yourName"
                  type="text"
                  placeholder={t('components.contact.form.namePlaceholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="contact__inp-flex">
                <label htmlFor="yourEmail">
                  {t('components.contact.form.email')} <span>*</span>
                </label>
                <input
                  id="yourEmail"
                  type="email"
                  placeholder={t('components.contact.form.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="contact__inp-flex">
                <label htmlFor="yourMessage">
                  {t('components.contact.form.message')} <span>*</span>
                </label>
                <textarea
                  id="yourMessage"
                  placeholder={t('components.contact.form.messagePlaceholder')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button className="contact__btn" type="submit" disabled={loading}>
                {loading ? t('components.contact.form.sending') : t('components.contact.form.submit')}
              </button>
            </form>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23969.772147547457!2d69.4211686!3d41.3257962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef716040d8001%3A0xaf24862e6ceb4cb5!2sCAEx%20(Central%20Asian%20Expocenter)!5e0!3m2!1sru!2s!4v1760083867842!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="bottom-right" autoClose={4000} theme="colored" />
    </div>
  );
};

export default Contact;
