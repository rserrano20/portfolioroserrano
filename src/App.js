import  React from "react";
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/principal/Contacto";
import Educacion from "./components/principal/Educacion";
import Habilidades from "./components/principal/Habilidades";
import Inicio from './components/principal/Inicio'
import Portfolio from "./components/principal/Portfolio";
import SobreMi from "./components/principal/SobreMi";
import NotFoundPage from "./components/principal/NotFoundPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";




function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Inicio/>}/> 
    <Route path="/sobreMi" element={<SobreMi/>}/> 
    <Route path="/habilidades" element={<Habilidades/>}/> 
    <Route path="/portfolio" element={<Portfolio/>}/> 
    <Route path="/contacto" element={<Contacto/>}/> 
    <Route path="/educacion" element={<Educacion/>}/> 
    <Route path="*" element={<NotFoundPage/>}/> 
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
