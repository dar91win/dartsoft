import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#212529", color: "#fff", padding: "1rem", marginTop: "auto" }}>
      <p>© {new Date().getFullYear()} Dartsoft - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;