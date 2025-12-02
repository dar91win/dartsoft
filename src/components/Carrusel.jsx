import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Carrusel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/1.jpg" className="d-block w-100" alt="Servicio 1" />
        </div>
        <div className="carousel-item">
          <img src="./img/2.jpg" className="d-block w-100" alt="Servicio 2" />
        </div>
        <div className="carousel-item">
          <img src="./img/3.jpg" className="d-block w-100" alt="Servicio 3" />
        </div>
         <div className="carousel-item">
          <img src="./img/4.jpg" className="d-block w-100" alt="Servicio 4" />
        </div>
         <div className="carousel-item">
          <img src="./img/5.jpg" className="d-block w-100" alt="Servicio 5" />
        </div>
         <div className="carousel-item">
          <img src="./img/6.jpg" className="d-block w-100" alt="Servicio 6" />
        </div>
         <div className="carousel-item">
          <img src="./img/7.jpg" className="d-block w-100" alt="Servicio 7" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carrusel;