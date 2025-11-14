import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";
import "./web2.css";
import Card from "./card";
import { Autocomplete, TextField } from "@mui/material";
import { FaHome, FaPhone, FaServicestack, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const heroesMarvel = [
  "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow",
  "Hawkeye", "Spider-Man", "Doctor Strange", "Black Panther", "Captain Marvel"
];


const galeriaAndalucia = [
  "/almeria.jpeg",
  "/granada.jpeg",
  "/malaga.jpeg",
  "/jaen.jpeg",

];

export default function Web2() {
  return (
    <Router>
      <Header />
      <Navigation />

      <main className="home-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:nombre" element={<MySkills />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>

        <Sidebar />
      </main>

      <Footer />
    </Router>
  );
}


function Header() {
  return (
    <header className="header">
      <h1>I.E.S CURA VALERA</h1>
      <img src="/logo.png" alt="Logo" className="header-logo" />
    </header>
  );
}


function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FaHome /> Inicio</Link></li>
        <li><Link to="/servicios"><FaServicestack /> Servicios</Link></li>
        <li><Link to="/contacto"><FaPhone /> Contacto</Link></li>
      </ul>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Autocomplete
        options={heroesMarvel}
        renderInput={(params) => <TextField {...params} label="Héroes de Marvel" />}
        style={{ width: '100%', marginBottom: '20px' }}
      />

      <iframe
        width="100%"
        height="200"
        src="video.mp4"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </aside>
  );
}


function Home() {
  return (
    <section className="main-content">
      <Card
        tituloSuperior="IES CURA VALERA"
        titulo="El IES Cura Valera participa en el X concurso INDALMAT"
        imagen="/indalmat.png"
      />
      <Card
        tituloSuperior="IES CURA VALERA"
        titulo="Escape Room Halloween"
        imagen="/escape-room-terror.jpeg"
      />
      <Card
        tituloSuperior="IES CURA VALERA"
        titulo="Di NO al Bullying"
        imagen="/bullying.jpeg"
      />

      <div className="gallery">
        {galeriaAndalucia.map((img, idx) => (
          <img key={idx} src={img} alt={`Andalucía ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}


function MySkills() {
  const params = useParams<{ nombre: string }>();
  return <h2>Parámetro introducido: {params.nombre}</h2>;
}


function Nopage() {
  return <h2>ERROR 404: Página no encontrada</h2>;
}

function Contacto() {
  return <h2>Página del contacto donde estarían todos los datos</h2>;
}


function About() {
  return <h3>Segunda página del proyecto</h3>;
}


function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons-footer">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>
      <p>I.E.S CURA VALERA</p>
    </footer>
  );
}
