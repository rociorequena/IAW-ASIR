export interface PokemonData {
  numero: number;
  img: string;
  nombre: string;
  hp: number;
  ataque: number;
  defensa: number;
}

export const fetchPokemonData = async (id: number): Promise<PokemonData> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  
  return {
    numero: data.id,
    img: data.sprites.other['official-artwork'].front_default,
    nombre: data.name,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
  };
};