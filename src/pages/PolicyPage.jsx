import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './pages.scss'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const PolicyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="policy">
        <div className="container">
          <div className="policy__wrapper">
            <Link to={'/'}>
              <MdArrowBack />
            </Link>
            <h1>{t('pages.policy.title')}</h1>
            <p>{t('pages.policy.content')}</p>
            <p>{t('pages.policy.content2')}</p>
            <p>{t('pages.policy.content3')}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PolicyPage
