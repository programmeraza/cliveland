import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Tg from '../../assets/svg/tg.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Linkedin from '../../assets/svg/linkedin.svg'

const Footer = () => {
    const { t } = useTranslation()

    return (
    <>
      <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__content">
                        <img src="./logo.svg" alt="" />
                        <div className="footer__text">
                            <p>{t('footer.phone')}</p>
                            <p>{t('footer.email')} <Link>{t('footer.emailLink')}</Link></p>
                        </div>
                        <div className="footer__icon-flex">
                            <Link target='blank' to={'https://web.telegram.org/k/'}>
                                <img src={Tg} alt="" />
                            </Link>
                            <Link target='blank' to={'https://www.facebook.com/?locale=ru_RU'}>
                                <img src={Facebook} alt="" />
                            </Link>
                            <Link target='blank' to={'https://www.linkedin.com/'}>
                                <img src={Linkedin} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="footer__adres">
                        <p>{t('footer.address.line1')}</p>
                        <p>{t('footer.address.line2')}</p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
