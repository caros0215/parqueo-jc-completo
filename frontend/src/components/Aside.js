import React, { useState, useEffect } from 'react';
import './Aside.css';
import profileImage from '../assets/usuarios/admin/191.jpg';
import logoClosedImage from '../assets/plantilla/logo11.png';
import logoOpenImage from '../assets/plantilla/logo_final_2.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSessionValid, setIsSessionValid] = useState(true);

  const sesionString = localStorage.getItem("session");
  const sesion = sesionString ? JSON.parse(sesionString) : null;

  useEffect(() => {
    if (!sesion || !sesion.user) {
      console.error("No se encontró la sesión o el usuario en localStorage");
      setIsSessionValid(false);
      return;
    }

    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".bx-menu");

    if (sidebarBtn) {
      const handleSidebarToggle = () => {
        sidebar.classList.toggle("close");
      };
      
      sidebarBtn.addEventListener("click", handleSidebarToggle);

      return () => {
        sidebarBtn.removeEventListener("click", handleSidebarToggle);
      };
    }
  }, [sesion]);

  if (!isSessionValid) {
    return null;
  }

  const perfil = sesion.user.perfil;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () => {
    const menuItems = [];

    if (perfil === "Administrador" || perfil === "Especial" || perfil === "Vendedor") {
      menuItems.push(
        <li key="inicio" title="Inicio">
          <div className="icon-container">
            <i className="bx bx-home"></i>
            <span className="link_name">Inicio</span>
          </div>
          <div className="tooltip-container">
            <span className="tooltip">Inicio</span>
          </div>
        </li>
      );

      if (perfil === "Administrador") {
        menuItems.push(
          <li key="usuarios" title="Usuarios">
            <div className="icon-container">
              <i className="bx bx-user"></i>
              <span className="link_name">Usuarios</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Usuarios</span>
            </div>
          </li>
        );
      }

      if (perfil === "Administrador" || perfil === "Especial") {
        menuItems.push(
          <li key="tarifas" title="Tarifas">
            <div className="icon-container">
              <i className="bx bx-money"></i>
              <span className="link_name">Tarifas</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Tarifas</span>
            </div>
          </li>,
          <li key="ingresos" title="Ingresos">
            <div className="icon-container">
              <i className="bx bx-trending-up"></i>
              <span className="link_name">Ingresos</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Ingresos</span>
            </div>
          </li>,
          <li key="salidas" title="Salidas">
            <div className="icon-container">
              <i className="bx bx-exit"></i>
              <span className="link_name">Salidas</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Salidas</span>
            </div>
          </li>
        );
      }

      if (perfil === "Administrador" || perfil === "Vendedor") {
        menuItems.push(
          <li key="abonados" title="Abonados">
            <div className="icon-container">
              <i className="bx bx-group"></i>
              <span className="link_name">Abonados</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Abonados</span>
            </div>
          </li>,
          <li key="caja" title="Caja">
            <div className="icon-container">
              <i className="bx bx-cart"></i>
              <span className="link_name">Caja</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Caja</span>
            </div>
          </li>,
          <li key="pagos" title="Pagos">
            <div className="icon-container">
              <i className="bx bx-dollar"></i>
              <span className="link_name">Pagos</span>
            </div>
            <div className="tooltip-container">
              <span className="tooltip">Pagos</span>
            </div>
          </li>
        );

        if (perfil === "Administrador") {
          menuItems.push(
            <li key="reportes" title="Reporte ventas">
              <div className="icon-container">
                <i className="bx bx-line-chart"></i>
                <span className="link_name">Reporte ventas</span>
              </div>
              <div className="tooltip-container">
                <span className="tooltip">Reporte ventas</span>
              </div>
            </li>
          );
        }
      }
    }

    return menuItems;
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
        <div className="logo-details">
          <img
            src={isOpen ? logoOpenImage : logoClosedImage}
            alt="Logo"
            className={`sidebar-logo ${isOpen ? 'logo-open' : 'logo-closed'}`}
          />
        </div>
        <ul className="nav-links">
          {renderMenuItems()}
        </ul>
      </div>
      <section className="home-section">
        <div className={`profile-item ${!isOpen ? 'sidebar-close' : ''}`}>
          <div className="home-content">
            <i className='bx bx-menu' onClick={toggleSidebar}></i>
          </div>
          <div className="profile-details">
            <div className="profile-content">
              <img src={profileImage} alt="profileImg" />
            </div>
            <div className="name-job">
              <div className="profile_name">{sesion.user.nombre}</div>
            </div>
            <i className='bx bx-log-out'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
