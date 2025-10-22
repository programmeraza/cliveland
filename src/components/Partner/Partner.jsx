import React from 'react'
import './Partner.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Partner = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="partner">
        <div className="container">
            <div className="partner__wrapper">
                <div className="partner__content">
                    <div className="partner__item">
                        <h1>{t('components.partner.title')}</h1>
                        <p>{t('components.partner.description1')}</p>
                        <p>{t('components.partner.description2')}</p>
                    </div>
                    <div className="partner__block">
                        <p>{t('components.partner.description3')}</p>
                    </div>
                    <Link>
                        <button className="partner__btn">
                            {t('components.partner.button')}
                        </button>
                    </Link>
                </div>
                <img src="./water.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
