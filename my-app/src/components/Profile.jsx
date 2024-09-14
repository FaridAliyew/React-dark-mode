import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser({
        username: userData.username,
        email: userData.email,
        password: userData.password
      });
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogOut = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="container mt-4">
        <h1>{t('profile')}</h1>
        <div className="card p-4">
          <h3>{t('username')}: {user.username}</h3>
          <h3>{t('email')}: {user.email}</h3>
          <h3>{t('password')}: {'*'.repeat(user.password.length)}</h3> {/* Şifrəni gizlət */}
        </div>
        <button className="btn btn-danger mt-3" onClick={handleLogOut}>{t('logOut')}</button>
      </div>
    </div>
  );
}

export default Profile;
