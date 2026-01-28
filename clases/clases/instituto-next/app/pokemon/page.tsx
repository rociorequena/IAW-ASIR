'use client'
import { useEffect, useState } from 'react';
// Importamos Link para la navegación interna (pág 25 y 29 del PDF)
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';

interface Pokemon {
  name: string;
  url: string;
}

interface PokeData {
  results: Pokemon[];
}

export default function PokemonPage() {
  const [pokemons, setPokemon] = useState<PokeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Error al cargar los pokémon');
        }
        const data: PokeData = await response.json();
        setPokemon(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
        <Navbar/>
      <h1>Lista de Pokemon</h1>
      <ul>
        {pokemons?.results.map((pokemon: Pokemon, index: number) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
      <footer>Rocio Requena </footer>
    </div>
  );
}