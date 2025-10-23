import React, { useState } from "react";
import "./Our.scss";
import ModalForm from "../ModalForm/ModalForm";
import { useTranslation } from 'react-i18next';
import Davinci from '../../assets/img/davinci.png'
import Group from '../../assets/img/group.png'
import Medic from '../../assets/img/medic.png'
import Profi from '../../assets/img/profi.png'

const Our = () => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="our" id="our">
        <div className="container">
          <div className="our__wrapper">
            <div className="our__top">
              <h1>{t('components.our.title')}</h1>
              <p>
                {t('components.our.subtitle')}
              </p>
            </div>
            <div className="our__cards">
              <div className="our__card">
                <img src={Davinci} alt="" />
                <div className="our__card-content">
                  <h3>
                    {t('components.our.cards.infrastructure.title').split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p>
                    {t('components.our.cards.infrastructure.description')}
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src={Group} alt="" />
                <div className="our__card-content">
                  <h3>
                    {t('components.our.cards.mentors.title').split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p>
                    {t('components.our.cards.mentors.description')}
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src={Profi} alt="" />
                <div className="our__card-content">
                  <h3>
                    {t('components.our.cards.internships.title').split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {index === 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p>
                    {t('components.our.cards.internships.description')}
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src={Medic} alt="" />
                <div className="our__card-content">
                  <h3>
                    {t('components.our.cards.growth.title').split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p>
                    {t('components.our.cards.growth.description')}
                  </p>
                </div>
              </div>
            </div>
            <button className="our__btn" onClick={openModal}>
              {t('components.our.button')}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16699 10H15.8337"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.1665L15.8333 9.99984L10 15.8332"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ModalForm isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Our;
