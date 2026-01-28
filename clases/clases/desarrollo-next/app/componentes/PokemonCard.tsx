"use client";
import { Card } from 'react-bootstrap'; // Ya no importamos Button aquí
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import "./PokemonCard.css";

export default function PokemonCard({ pokemon }: any) {
  const { t } = useLanguage();
  
  return (
    <Card className="card1">
      <Card.Img variant="top" src={pokemon.img} className="card2" />
      <Card.Body>
        <Card.Title className="card3">#{pokemon.numero} {pokemon.nombre}</Card.Title>
        
        <Link href={`/pokemon/${pokemon.numero}`} className="btn btn-primary btn-sm">
          {t.details}
        </Link>
        
      </Card.Body>
    </Card>
  );
}