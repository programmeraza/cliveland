import React from 'react'
import './LogoFlex.scss'
import { useTranslation } from 'react-i18next'

const LogoFlex = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="logoFlex">
                <div className="container">
                    <div className="logoFlex__wrapper">
                        <h1>{t('components.logoflex.title')}</h1>
                        <div className="logoFlex__image">
                            <img src="./akfa.png" alt="" />
                            <img src="./cau.png" alt="" />
                            <img src="./hks.png" alt="" />
                            <img src="./connect.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoFlex
