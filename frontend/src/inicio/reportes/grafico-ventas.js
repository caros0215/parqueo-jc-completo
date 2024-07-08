import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const GraficoVentas = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Ventas',
        data: [],
        borderColor: '#efefef',
        pointBackgroundColor: '#efefef',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchVentas = async (fechaInicial = null, fechaFinal = null) => {
      try {
        const response = await fetch(
          `/api/ventas?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`
        );
        const result = await response.json();

        let arrayFechas = [];
        let sumaPagosMes = {};

        result.forEach((value) => {
          const fecha = value.fecha.substring(0, 7);
          if (!arrayFechas.includes(fecha)) {
            arrayFechas.push(fecha);
          }
          if (!sumaPagosMes[fecha]) {
            sumaPagosMes[fecha] = 0;
          }
          sumaPagosMes[fecha] += value.total;
        });

        setData({
          labels: arrayFechas,
          datasets: [
            {
              label: 'Ventas',
              data: arrayFechas.map((fecha) => sumaPagosMes[fecha]),
              borderColor: '#efefef',
              pointBackgroundColor: '#efefef',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener datos de ventas:', error);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div className="box box-solid bg-teal-gradient">
      <div className="box-header">
        <i className="fa fa-th"></i>
        <h3 className="box-title">Gráfico de Ventas</h3>
      </div>
      <div className="box-body border-radius-none nuevoGraficoVentas">
        <div className="chart" style={{ height: '250px' }}>
          <Line
            data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                x: {
                  ticks: { color: '#fff' },
                  grid: { color: '#efefef' },
                },
                y: {
                  ticks: { color: '#fff', callback: (value) => `$${value}` },
                  grid: { color: '#efefef' },
                },
              },
              plugins: {
                legend: { display: false },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GraficoVentas;
