//import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter basename="/dartsoftapp">
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
