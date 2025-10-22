import React from 'react'
import './Text.scss'
import { useTranslation } from 'react-i18next'

const Text = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text">
        <div className="container">
            <div className="text__wrapper">
                <p>{t('components.text.content')}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Text
