import React from 'react';
import './Header.css';

const Header = ({ sesion }) => {
  return (
    <header className="main-header">
      <div className="profile-details">
        <div className="profile-content">
          <img src="image/profile.jpg" alt="profileImg" />
        </div>
        <div className="name-job">
          <div className="profile_name">{sesion.user.nombre}</div>
          <div className="job">{sesion.user.perfil}</div>
        </div>
        <i className='bx bx-log-out'></i>
      </div>
    </header>
  );
};

export default Header;
