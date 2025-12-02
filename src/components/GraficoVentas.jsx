import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Enero", ventas: 400 },
  { name: "Febrero", ventas: 300 },
  { name: "Marzo", ventas: 500 },
  { name: "Abril", ventas: 200 },
];

const GraficoVentas = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="ventas" fill="#0d6efd" />
    </BarChart>
  );
};

export default GraficoVentas;