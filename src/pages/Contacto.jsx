import React from "react";

const Contacto = () => {
  return (
    <div>
      <h2>Contáctanos</h2>
      <p>Correo: info@dartsoft.com</p>
      <p>Teléfono: +593 999 999 999</p>
      <form>
        <label>Nombre:</label>
        <input type="text" />
        <br />
        <label>Mensaje:</label>
        <textarea />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;