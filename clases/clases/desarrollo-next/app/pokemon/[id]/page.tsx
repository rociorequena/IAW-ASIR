"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProgressBar } from 'react-bootstrap'; 
import Link from 'next/link';
import { fetchPokemonData } from '../../api/fetchData';
import { useLanguage } from '../../context/LanguageContext';
import "./detail.css";

export default function PokemonDetail() {
  const params = useParams();
  const { t } = useLanguage();
  const [pokemon, setPokemon] = useState<any>(null);

  const id = params?.id && typeof params.id === 'string' ? params.id : '';

  useEffect(() => {
    if (id) fetchPokemonData(Number(id)).then(setPokemon);
  }, [id]);

  if (!pokemon) return <h3 className="text-center mt-5">{t.loading}</h3>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h2 className="text-capitalize">#{pokemon.numero} {pokemon.nombre}</h2>
        <img src={pokemon.img} alt={pokemon.nombre} className="detail-img" />
        
        <h4 className="mt-4">{t.stats}</h4>
        <div className="detail-stats">
          <label>HP: {pokemon.hp}</label> 
          <ProgressBar now={pokemon.hp} max={150} variant="success" className="mb-2"/>
          <label>ATK: {pokemon.ataque}</label> 
          <ProgressBar now={pokemon.ataque} max={150} variant="danger" className="mb-2"/>
          <label>DEF: {pokemon.defensa}</label> 
          <ProgressBar now={pokemon.defensa} max={150} variant="info" className="mb-3"/>
        </div>

        <Link href="/" className="btn btn-secondary">
             {t.home}
        </Link>
      </div>
    </div>
  );
}