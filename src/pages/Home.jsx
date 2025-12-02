import React from "react";
import GraficoVentas from "../components/GraficoVentas";
import Carrusel from "../components/Carrusel";

const Home = () => {
  return (
    <div>
      <h2>Bienvenido a Dartsoft</h2>
      <Carrusel />
      <div style={{ marginTop: "2rem" }}>
        <GraficoVentas />
      </div>
    </div>
  );
};

export default Home;