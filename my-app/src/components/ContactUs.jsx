import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { DarkModeContext } from './DarkModeContext';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { t } = useTranslation();

    return (
        <div className={`contact-us ${darkMode ? 'bg-black' : ''}`}>
            <h1>{t('contactUss')}</h1>
            <div className="contact-info">
                <p><strong>{t('address')}:</strong> 1234 Main Street, Anytown, USA</p>
                <p><strong>{t('phone')}:</strong> +1 234 567 890</p>
                <p><strong>{t('emaill')}:</strong> contact@example.com</p>
            </div>
            <h2>{t('sendUsMessage')}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">{t('name')}</label>
                    <input type="text" id="name" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
                    <input type="email" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">{t('message')}</label>
                    <textarea id="message" className="form-control" rows="4" />
                </div>
                <button type="submit" className="btn btn-primary">{t('sendMessage')}</button>
            </form>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </div>
    );
};

export default ContactUs;
