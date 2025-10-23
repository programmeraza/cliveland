import React from 'react'
import './LogoFlex.scss'
import { useTranslation } from 'react-i18next'
import Akfa from '../../assets/svg/akfa.svg'
import Cau from '../../assets/svg/cau.svg'
import Hks from '../../assets/svg/hks.svg'
import Connect from '../../assets/svg/connect.svg'

const LogoFlex = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="logoFlex">
                <div className="container">
                    <div className="logoFlex__wrapper">
                        <h1>{t('components.logoflex.title')}</h1>
                        <div className="logoFlex__image">
                            <img src={Akfa} alt="" />
                            <img src={Cau} alt="" />
                            <img src={Hks} alt="" />
                            <img src={Connect} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoFlex
