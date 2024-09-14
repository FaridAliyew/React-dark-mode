import React, { useContext, useState } from 'react';
import LoginImg from '../imgs/Login-bg.png';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from './DarkModeContext';

function Login() {
    const { setDarkMode } = useContext(DarkModeContext);
    const { t, i18n } = useTranslation();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleToggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);

            if (formData.email === userData.email && formData.password === userData.password) {
                alert(t('registrationSuccessful'));
                navigate('/dashboard');
            } else {
                alert(t('fillAllFields'));
            }
        } else {
            alert(t('noUserDataFound'));
        }
    };

    return (
        <div className='login-container'>
            <MdOutlineDarkMode className='darkMode-icon' onClick={handleToggleDarkMode} />

            {/* Dil Dəyişdirici Butonlar */}
            <div className='language-buttons'>
                <button className='en-button' onClick={() => handleLanguageChange('en')}>English</button>
                <button className='az-button' onClick={() => handleLanguageChange('az')}>Azərbaycan</button>
            </div>

            <div className='container'>
                <div className='row px-5 py-1'>
                    <div className='col-12 col-md-6 forms ms-5'>
                        <h1 className='p-4 ms-4 mb-4'>{t('login')}</h1>

                        <form className='p-5' onSubmit={handleSubmit}>
                            <label>{t('email')}</label> <br />
                            <input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                name='email'
                                className='mt-2'
                                value={formData.email}
                                onChange={handleChange}
                            /> <br />

                            <label className='mt-2'>{t('password')}</label> <br />
                            <input
                                type="password"
                                placeholder={t('passwordPlaceholder')}
                                name='password'
                                className='mt-2'
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <button type='submit' className='submit'>{t('signIn')}</button>
                        </form>

                        <p className='p-5 forget-password'>{t('forgetPassword')}</p>

                        <p className='p-5 continue'>{t('orContinueWith')}</p>

                        {/* İkonlar */}
                        <div className='icons'>
                            <span className='icon'><FcGoogle className='google' /></span>
                            <span className='icon'><FaGithub className='gitHub' /></span>
                            <span className='icon facebook-icon'><FaFacebook className='facebook' /></span>
                        </div>

                        <p className='goToRegister'>
                            {t('register')} <Link to="/register" className='goRegister'>{t('registerHere')}</Link>
                        </p>
                    </div>

                    {/* Şəkil */}
                    <div className='d-none d-xxl-block col-md-6 ms-5'>
                        <img src={LoginImg} className='img-fluid mt-5' alt="Login background" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
