import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [ventas, setVentas] = useState(0);
  const [totalCategorias, setTotalCategorias] = useState(0);
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    // Reemplaza estas URL con los endpoints reales que obtienen los datos
    const fetchVentas = async () => {
      try {
        const response = await fetch('/api/ventas');
        const data = await response.json();
        setVentas(data.total);
      } catch (error) {
        console.error('Error al obtener ventas:', error);
      }
    };

    const fetchCategorias = async () => {
      try {
        const response = await fetch('/api/categorias');
        const data = await response.json();
        setTotalCategorias(data.length);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };

    const fetchClientes = async () => {
      try {
        const response = await fetch('/api/clientes');
        const data = await response.json();
        setTotalClientes(data.length);
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };

    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/productos');
        const data = await response.json();
        setTotalProductos(data.length);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchVentas();
    fetchCategorias();
    fetchClientes();
    fetchProductos();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-3 col-xs-6">
        <div className="small-box bg-aqua">
          <div className="inner">
            <h3>${ventas.toFixed(2)}</h3>
            <p>Ventas</p>
          </div>
          <div className="icon">
            <i className="ion ion-social-usd"></i>
          </div>
          <a href="ventas" className="small-box-footer">
            Más info <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>

      <div className="col-lg-3 col-xs-6">
        <div className="small-box bg-green">
          <div className="inner">
            <h3>{totalCategorias}</h3>
            <p>Categorías</p>
          </div>
          <div className="icon">
            <i className="ion ion-clipboard"></i>
          </div>
          <a href="categorias" className="small-box-footer">
            Más info <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>

      <div className="col-lg-3 col-xs-6">
        <div className="small-box bg-yellow">
          <div className="inner">
            <h3>{totalClientes}</h3>
            <p>Clientes</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add"></i>
          </div>
          <a href="clientes" className="small-box-footer">
            Más info <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>

      <div className="col-lg-3 col-xs-6">
        <div className="small-box bg-red">
          <div className="inner">
            <h3>{totalProductos}</h3>
            <p>Productos</p>
          </div>
          <div className="icon">
            <i className="ion ion-ios-cart"></i>
          </div>
          <a href="productos" className="small-box-footer">
            Más info <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
