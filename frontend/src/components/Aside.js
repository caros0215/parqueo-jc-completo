import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Aside.css'; // Asegúrate de tener los estilos correspondientes

const Nav = () => {
  // Recuperar y parsear la sesión desde localStorage
  const sesionString = localStorage.getItem("session");
  const sesion = sesionString ? JSON.parse(sesionString) : null;

  if (!sesion || !sesion.user) {
    console.error("No se encontró la sesión o el usuario en localStorage");
    return null; // Retorna null si no se encuentra la sesión
  }

  console.log('Perfil del usuario:', sesion.user.perfil);

  // Función para renderizar los elementos del menú según el sesion.user.perfil
  const renderMenuItems = () => {
    const perfil = sesion.user.perfil;

    let menuItems = [];

    // Menú común para "Administrador"
    if (perfil === "Administrador") {
      menuItems.push(
        <li className="active" key="inicio">
          <a href="inicio">
            <i className="fa fa-home"></i>
            <span>Inicio</span>
          </a>
        </li>,
        <li key="usuarios">
          <a href="usuarios">
            <i className="fa fa-user"></i>
            <span>Usuarios</span>
          </a>
        </li>
      );
    }

    // Menú común para "Administrador" y "Especial"
    if (perfil === "Administrador" || perfil === "Especial") {
      menuItems.push(
        <li key="categorias">
          <a href="categorias">
            <i className="fa fa-money"></i>
            <span>Tarifas</span>
          </a>
        </li>,
        <li key="productos">
          <a href="productos">
            <i className="fa fa-indent"></i>
            <span>Ingresos</span>
          </a>
        </li>,
        <li key="salidas">
          <a href="salidas">
            <i className="fa fa-sign-out"></i>
            <span>Salidas</span>
          </a>
        </li>
      );
    }

    // Menú común para "Administrador" y "Vendedor"
    if (perfil === "Administrador" || perfil === "Vendedor") {
      menuItems.push(
        <li key="clientes">
          <a href="clientes">
            <i className="fa fa-users"></i>
            <span>Abonados</span>
          </a>
        </li>
      );
    }

    // Menú específico para "Administrador" y "Vendedor"
    if (perfil === "Administrador" || perfil === "Vendedor") {
      menuItems.push(
        <li key="cajas">
          <a href="cajas">
            <i className="fa fa-cart-plus"></i>
            <span>Caja</span>
          </a>
        </li>,
        <li key="crear-venta">
          <a href="crear-venta">
            <i className="fa fa-usd"></i>
            <span>Pagos</span>
          </a>
        </li>
      );

      if (perfil === "Administrador") {
        menuItems.push(
          <li key="reportes">
            <a href="reportes">
              <i className="fa fa-line-chart"></i>
              <span>Reporte de ventas</span>
            </a>
          </li>
        );
      }
    }

    return menuItems;
  };

  return (
    <div className="nav" id="navbar">
      <nav className="nav__container">
        <div>
          <a href="#" className="nav__link nav__logo">
            <i className="bx bxs-disc nav__icon"></i>
            <span className="nav__logo-name">Codigo369</span>
          </a>
          <div className="nav__list">
            <div className="nav__items">
              <h3 className="nav__subtitle">Profile</h3>
              <a href="#" className="nav__link active">
                <i className="bx bx-home nav__icon"></i>
                <span className="nav__name">Home</span>
              </a>
              <div className="nav__dropdown">
                <a href="#" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Profile</span>
                  <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                </a>
                <div className="nav__dropdown-collapse">
                  <div className="nav__dropdown-content">
                    <a href="#" className="nav__dropdown-item">Passwords</a>
                    <a href="#" className="nav__dropdown-item">Mail</a>
                    <a href="#" className="nav__dropdown-item">Accounts</a>
                  </div>
                </div>
              </div>
              <a href="#" className="nav__link">
                <i className="bx bx-message-rounded nav__icon"></i>
                <span className="nav__name">Messages</span>
              </a>
            </div>
            <div className="nav__items">
              <h3 className="nav__subtitle">Menu</h3>
              <div className="nav__dropdown">
                <a href="#" className="nav__link">
                  <i className="bx bx-bell nav__icon"></i>
                  <span className="nav__name">Notifications</span>
                  <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                </a>
                <div className="nav__dropdown-collapse">
                  <div className="nav__dropdown-content">
                    <a href="#" className="nav__dropdown-item">Blocked</a>
                    <a href="#" className="nav__dropdown-item">Silenced</a>
                    <a href="#" className="nav__dropdown-item">Publish</a>
                  </div>
                </div>
              </div>
              <a href="#" className="nav__link">
                <i className="bx bx-compass nav__icon"></i>
                <span className="nav__name">Explore</span>
              </a>
              <a href="#" className="nav__link">
                <i className="bx bx-bookmark nav__icon"></i>
                <span className="nav__name">Saved</span>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="nav__link nav__logout">
          <i className="bx bx-log-out nav__icon"></i>
          <span className="nav__name">Log Out</span>
        </a>
      </nav>
      <aside className="main-sidebar" style={{ position: 'absolute', top: 0, left: 0, width: '232px', paddingTop: '78px', minHeight: '100%', backgroundColor: '#000000', borderRight: '2px solid #e3aa00' }}>
        <section className="sidebar">
          <ul className="sidebar-menu">
            {renderMenuItems()}
          </ul>
        </section>
      </aside>
    </div>
  );
};

//cambios nuevos
export default Nav;
