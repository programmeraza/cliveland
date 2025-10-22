import React from 'react'
import './Experience.scss'
import { useTranslation } from 'react-i18next'

const Experience = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="expert">
                <div className="container">
                    <div className="expert__wrapper">
                        <div className="expert__top">
                            <h1>{t('components.experience.title')}</h1>
                            <p>{t('components.experience.subtitle')}</p>
                        </div>
                        <div className="expert__bottom">
                            <div className="expert__cards">
                                <div className="expert__card">
                                    <div className="expert__card-img">
                                        <img src="./center1.svg" alt="" />
                                    </div>
                                    <h4>{t('components.experience.cards.treatment.title')}</h4>
                                    <p>{t('components.experience.cards.treatment.description')}</p>
                                </div>
                                <div className="expert__card">
                                    <div className="expert__card-img">
                                        <img src="./center2.svg" alt="" />
                                    </div>
                                    <h4>{t('components.experience.cards.education.title')}</h4>
                                    <p>{t('components.experience.cards.education.description')}</p>
                                </div>
                                <div className="expert__card">
                                    <div className="expert__card-img">
                                        <img src="./center3.svg" alt="" />
                                    </div>
                                    <h4>{t('components.experience.cards.research.title')}</h4>
                                    <p>{t('components.experience.cards.research.description')}</p>
                                </div>
                            </div>
                            <p>{t('components.experience.conclusion')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
