import React from 'react'
import './Clinic.scss'
import { useTranslation } from 'react-i18next'

const Clinic = () => {
    const { t } = useTranslation()

    return (
        <>
      <div className="clinic" id="about">
        <div className="container">
            <div className="clinic__wrapper">
                <h1>{t('components.clinic.title')}</h1>
                <div className="clinic__flex">
                    <div className="clinic__block">
                        <img src="./clinic-small.png" alt="" />
                        <div className="clinic__content">
                            <h2>{t('components.clinic.subtitle')}</h2>
                            <p>{t('components.clinic.description')}</p>
                        </div>
                        <div className="clinic__calc">
                            <div className="clinic__calc-flex">
                                <p>{t('components.clinic.construction')}</p>
                                <h3>{t('components.clinic.constructionDate')}</h3>
                            </div>
                            <div className="clinic__calc-flex">
                                <p>{t('components.clinic.opening')}</p>
                                <h3>{t('components.clinic.openingYear')}</h3>
                            </div>
                        </div>
                    </div>
                    <img src="./clinic-big.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Clinic
