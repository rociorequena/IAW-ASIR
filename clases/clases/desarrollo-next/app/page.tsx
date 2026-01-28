"use client";
import { useEffect, useState } from 'react';
import { fetchPokemonData } from './api/fetchData';
import PokemonCard from './componentes/PokemonCard';
import { useLanguage } from './context/LanguageContext';
import "./home.css";

export default function Home() {
  const { t } = useLanguage();
  const [pokemon, setPoke] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => { 
    fetchPokemonData(Math.floor(Math.random()*386)+1).then(setPoke); 
  }, []);

  return (
    <div className="home1">
      <h2>{t.welcome}</h2>
      
      {pokemon ? (
        <div className="home2">
          <div className="home3">
             <PokemonCard pokemon={pokemon} onOpenModal={(p:any)=>{setPoke(p); setShow(true)}} />
          </div>
        </div>
      ) : <p>{t.loading}</p>}
      
    </div>
  );
}