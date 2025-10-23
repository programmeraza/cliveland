import React, { useState } from "react";
import "./List.scss";
import { useNavigate } from "react-router-dom";
import ModalForm from "../ModalForm/ModalForm";
import { useTranslation } from 'react-i18next';
import Partner from '../../assets/img/parner.png'

const List = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const departments = [
    "Отделение анестезиологии",
    "Отделение кардиологии",
    "Отделение неврологии",
    "Отделение онкологии",
    "Отделение педиатрии",
    "Отделение хирургии",
    "Отделение терапии",
    "Отделение урологии",
    "Отделение гинекологии",
    "Отделение дерматологии",
    "Отделение гастроэнтерологии",
    "Отделение эндокринологии",
    "Отделение офтальмологии",
    "Отделение травматологии",
  ];

  const handleSelect = (department) => {
    navigate('/vacancy', { state: { selectedDepartment: department } });
  };  

  return (
    <>
      <div className="list">
        <div className="container">
          <div className="list__wrapper" >
            <h1 id='vacancy'>
              {t('components.list.title')}
            </h1>
            <div className="list__wrap">
              <div className="list__content">
                <div className="list__warning">
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

                  <p>
                    {t('components.list.warning')}
                  </p>
                </div>

                <p>
                  {t('components.list.description')}
                </p>

                <button className="list__btn" onClick={openModal}>
                  {t('components.list.button')}
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

                <img src={Partner} alt="partner" />
              </div>

              <div className="list__departments">
                {departments.map((name, index) => (
                  <div
                    key={index}
                    className="list__item"
                    onClick={() => handleSelect(name)}
                  >
                    <span className="list__name">{name}</span>
                    <div className="list__arrow">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16699 10H15.8337"
                          stroke="#1E1E1E"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16699L15.8333 10.0003L10 15.8337"
                          stroke="#1E1E1E"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalForm isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default List;
