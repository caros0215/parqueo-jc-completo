import React, { useState, useEffect } from 'react';

const ProductosRecientes = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/productos'); // Reemplaza con la URL real de tu API
        const data = await response.json();
        setProductos(data.slice(0, 10)); // Obtener solo los primeros 10 productos
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="box box-primary">
      <div className="box-header with-border">
        <h3 className="box-title">Productos Añadidos Recientemente</h3>
        <div className="box-tools pull-right">
          <button type="button" className="btn btn-box-tool" data-widget="collapse">
            <i className="fa fa-minus"></i>
          </button>
          <button type="button" className="btn btn-box-tool" data-widget="remove">
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body">
        <ul className="products-list product-list-in-box">
          {productos.map((producto, index) => (
            <li className="item" key={index}>
              <div className="product-img">
                <img src={producto.imagen} alt="Product Image" />
              </div>
              <div className="product-info">
                <a href="#" className="product-title">
                  {producto.descripcion}
                  <span className="label label-warning pull-right">${producto.precio_venta}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="box-footer text-center">
        <a href="productos" className="uppercase">Ver todos los productos</a>
      </div>
    </div>
  );
};

export default ProductosRecientes;
