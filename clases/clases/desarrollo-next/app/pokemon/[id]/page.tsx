"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ProgressBar, Button } from 'react-bootstrap'; 
import Link from 'next/link';
import { fetchPokemonData } from '../../api/fetchData';
import { useLanguage } from '../../context/LanguageContext';
import "./detail.css";

export default function PokemonDetail() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const currentId = Number(params?.id);

  useEffect(() => {
    if (currentId) {
      setLoading(true);
      fetchPokemonData(currentId)
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        })
        .catch(() => {
          notFound(); 
        });
    } else {
      notFound();
    }
  }, [currentId]);

  const handlePrev = () => {
    const prevId = currentId <= 1 ? 1 : currentId - 1;
    router.push(`/pokemon/${prevId}`);
  };

  const handleNext = () => {
    const nextId = currentId >= 1000 ? 1000 : currentId + 1;
    router.push(`/pokemon/${nextId}`);
  };

  if (loading) return <h3 className="text-center mt-5">{t.loading}</h3>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="d-flex justify-content-between mb-4">
          <Button variant="primary" onClick={handlePrev}>
            {t.prev} Pokémon
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Pokémon {t.next}
          </Button>
        </div>

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

        <Link href="/" className="btn btn-secondary mt-3">
             {t.backHome}
        </Link>
      </div>
    </div>
  );
}