import React, { useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';
import Twitter from '../../assets/svg/twitter.svg'
import Instagram from '../../assets/svg/instagram.svg'
import In from '../../assets/svg/in.svg'
import Call1 from '../../assets/svg/call1.svg'
import Call2 from '../../assets/svg/call2.svg'
import Call3 from '../../assets/svg/call3.svg'

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
                  <img src={Call1} alt="" />
                </div>
                <h3>{t('components.contact.cards.email.title')}</h3>
                <p>{t('components.contact.cards.email.description')}</p>
                <Link to="#">
                  <strong>{t('components.contact.cards.email.email')}</strong>
                </Link>
              </div>

              <div className="contact__card">
                <div className="contact__card-img">
                  <img src={Call2} alt="" />
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
                  <img src={Call3} alt="" />
                </div>
                <h3>{t('components.contact.cards.social.title')}</h3>
                <p>{t('components.contact.cards.social.description')}</p>
                <div className="contact__icon-flex">
                  <Link to={'https://x.com/?lang=ru'}>
                    <img src={Twitter} alt="" />
                  </Link>
                  <Link to={'https://www.linkedin.com/'}>
                    <img src={In} alt="" />
                  </Link>
                  <Link to={'https://www.instagram.com/'}>
                    <img src={Instagram} alt="" />
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
              src="https://yandex.ru/map-widget/v1/?ll=69.427889%2C41.328065&z=16&pt=69.427889,41.328065,pm2rdl"
              allowFullScreen
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
