import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Register() {
    const { t } = useTranslation(); // i18n tərcümə funksiyasını əlavə edirik
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form sahələrinin hamısının dolu olduğunu yoxlayırıq
        if (!formData.username || !formData.email || !formData.password) {
            alert(t('fillAllFields')); // Tərcümə edilmiş mesaj
            return;
        }

        // Məlumatları localStorage-də saxlayırıq
        localStorage.setItem('user', JSON.stringify(formData));

        // Form məlumatlarını sıfırlayırıq
        setFormData({
            username: '',
            email: '',
            password: ''
        });

        alert(t('registrationSuccessful')); // Tərcümə edilmiş mesaj

        // Login səhifəsinə yönləndiririk
        navigate('/');
    };

    return (
        <div className='register-container'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 forms'>
                        <h1 className='p-5 text-center'>{t('main-register')}</h1>

                        <form className='p-5' onSubmit={handleSubmit}>
                            <label>{t('username')}</label> <br />
                            <input
                                type="text"
                                placeholder={t('usernamePlaceholder')}
                                name='username'
                                className='mt-2'
                                value={formData.username}
                                onChange={handleChange}
                            /> <br />

                            <label className='mt-3'>{t('main-email')}</label> <br />
                            <input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                name='email'
                                className='mt-2'
                                value={formData.email}
                                onChange={handleChange}
                            /> <br />

                            <label className='mt-3'>{t('main-password')}</label> <br />
                            <input
                                type="password"
                                placeholder={t('passwordPlaceholder')}
                                name='password'
                                className='mt-2'
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <button type='submit' className='submit'>{t('main-register')}</button>
                        </form>

                        <p className='goToLogin text-center'>
                            {t('alreadyHaveAccount')} <Link to="/" className='goLogin'>{t('loginHere')}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
