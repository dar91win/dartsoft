import React from "react";
import logo from '../logo.svg';
const Header = () => {
  return (
    <header style={{ background: "#0d6efd", color: "#fff", padding: "1rem" }}>
      <h1>Dartsoft</h1>
      <nav>
        <a href="./" style={{ marginRight: "1rem", color: "#fff" }}>Inicio</a>
        <a href="./servicios" style={{ marginRight: "1rem", color: "#fff" }}>Servicios</a>
        <a href="./contacto" style={{ color: "#fff" }}>Contacto</a>
      </nav>
    </header>
  );
};

export default Header;