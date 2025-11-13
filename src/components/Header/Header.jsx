import React, { useState, useEffect } from 'react'
import './Header.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';
import SelectUi from "../SelectUi/SelectUi"
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import ModalForm from "../ModalForm/ModalForm";
import { useTranslation } from 'react-i18next';
import LogoHeader from '../../assets/svg/logo.svg'

const Header = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const openModal = () => {
        setModalOpen(true);
        closeMenu();
    };

    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const isVacancyPage = location.pathname === '/vacancy' || location.pathname === '/policy';

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <Link to={'/'}>
                            <img src={LogoHeader} alt="logo" />
                        </Link>

                        <div className="header__nav-flex">
                            {!isVacancyPage && (
                                <ul className="header__ul">
                                    <Link smooth to={'#about'}>{t('header.nav.about')}</Link>
                                    <Link smooth to={'#our'}>{t('header.nav.advantages')}</Link>
                                    <Link smooth to={'#vacancy'}>{t('header.nav.vacancies')}</Link>
                                    <Link smooth to={'#contact'}>{t('header.nav.contacts')}</Link>
                                </ul>
                            )}

                            <button
                                className={`header__burger ${menuOpen ? 'active' : ''}`}
                                onClick={toggleMenu}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>


                            <div className={`header__menu ${menuOpen ? 'active' : ''}`}>
                                <div className="header__menu-top">
                                    {/* <Link to={'/'}>
                                        <img src={LogoHeader} alt="logo" />
                                    </Link> */}
                                    {/* <button className="header__menu-close" onClick={closeMenu}>
                                        <IoCloseOutline />
                                    </button> */}
                                </div>
                                <ul className="header__menu-list">
                                    {!isVacancyPage && (
                                        <>
                                            <Link smooth to={'#about'} onClick={closeMenu}>{t('header.nav.about')}</Link>
                                            <Link smooth to={'#our'} onClick={closeMenu}>{t('header.nav.advantages')}</Link>
                                            <Link smooth to={'#vacancy'} onClick={closeMenu}>{t('header.nav.vacancies')}</Link>
                                            <Link smooth to={'#contact'} onClick={closeMenu}>{t('header.nav.contacts')}</Link>
                                        </>
                                    )}
                                    <SelectUi />
                                    <Link>
                                        <button className="header__menu-list-btn" onClick={openModal}>
                                            {t('header.nav.apply')}
                                        </button>
                                    </Link>
                                </ul>
                            </div>

                            <div className="header__btn-flex">
                                <button className="header__btn" onClick={openModal}>
                                    {t('header.nav.apply')}
                                </button>
                                <SelectUi />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalForm isOpen={modalOpen} onClose={closeModal} />
        </>
    )
}

export default Header
