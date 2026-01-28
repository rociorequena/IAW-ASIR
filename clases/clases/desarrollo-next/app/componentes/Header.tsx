"use client";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header className="header1">
      <div className="header2"><h1 className="header3">Pokémon de Rocío</h1></div>
      <Navigation />
    </header>
  );
}