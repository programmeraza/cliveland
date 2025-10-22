import React from 'react'
import './Area.scss'
import { useTranslation } from 'react-i18next'


const Area = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="area">
        <div className="container">
            <div className="area__wrapper">
                <div className="area__card">
                    <h2 className='area__title1'>{t('components.area.cards.area.value')}</h2>

                    <div className="area__line"></div>
                    <p>{t('components.area.cards.area.description')}</p>
                </div>
                <div className="area__card">
                    <h2 className='area__title2'>{t('components.area.cards.beds.value')}</h2>
                    <div className="area__line"></div>
                    <p>{t('components.area.cards.beds.description')}</p>
                </div>
                <div className="area__card">
                    <h2 className='area__title3'>{t('components.area.cards.capacity.value')}</h2>
                    <div className="area__line"></div>
                    <p>{t('components.area.cards.capacity.description')}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Area
