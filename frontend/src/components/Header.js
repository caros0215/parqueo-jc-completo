// src/components/Header.js
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Header.css'; // Asegúrate de tener los estilos correspondientes

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src="./assets/img/avatar.jpg" className="header__img" alt="Avatar" />
        <div className="header__search">
          <input type="search" placeholder="Buscar..." className="header__input" />
          <i className="bx bx-search"></i>
        </div>
        <div className="header__toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
