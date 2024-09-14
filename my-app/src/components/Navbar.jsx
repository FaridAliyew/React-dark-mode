import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const { t, i18n } = useTranslation(); // useTranslation() istifadə edin

    const handleToggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">{t('navbarBrand')}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label={t('toggleNavigation')}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${darkMode ? 'text-light' : 'text-white'}`} to="/dashboard">{t('home')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${darkMode ? 'text-light' : 'text-white'}`} to="/about">{t('about')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${darkMode ? 'text-light' : 'text-white'}`} to="/contact-us">{t('contactUs')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${darkMode ? 'text-light' : 'text-white'}`} to="/profile">{t('profile')}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className={`form-control me-2 ${darkMode ? 'bg-dark text-light' : ''}`} type="search" placeholder={t('searchPlaceholder')} aria-label={t('search')} />
                        <button className={`btn ${darkMode ? 'bg-light text-secondary' : 'btn-primary text-white'}`} type="submit">{t('search')}</button>
                    </form>
                    <button className={`btn ${darkMode ? 'btn-light' : 'btn-primary'} ms-3`} onClick={handleToggleDarkMode}>
                        {darkMode ? t('lightMode') : t('darkMode')}
                    </button>
                    {/* Dil seçici */}
                    <div className="ms-3">
                        <button className={`btn ${darkMode ? 'btn-light' : 'btn-primary'} dropdown-toggle`} type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            {i18n.language === 'en' ? 'English' : 'Azərbaycan'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                            <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
                            <li><button className="dropdown-item" onClick={() => handleLanguageChange('az')}>Azərbaycan</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
