// 1. Corregimos la sintaxis de la interface (sin el signo =) [cite: 210, 1088]
interface Pokemon {
  numero: number;
  img: string;
  nombre: string;
  hp: number;
  ataque: number;
  defensa: number;
}

// 2. Función asíncrona para obtener datos (siguiendo el modelo fetch de la unidad) [cite: 1031, 1047]
async function getPokemon(id: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al cargar el Pokémon");
  }

  const data = await res.json();

  // Devolvemos el objeto mapeado correctamente [cite: 1049, 1090]
  return {
    numero: data.id,
    // Eliminamos el salto de línea en la URL para que no de error 404
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    nombre: data.name,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
  };
}

// 3. Tipamos las Props de la página según los estándares de Next.js
interface PageProps {
  params: Promise<{ id: string }>;
}

// 4. Componente de servidor (Server Component) para carga rápida [cite: 639, 882]
export default async function Page({ params }: PageProps) {
  // En Next.js moderno, params es una Promesa que debemos esperar 
  const { id } = await params; 
  const pokemon = await getPokemon(id);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ textTransform: 'capitalize' }}>{pokemon.nombre}</h1>
      <img 
        src={pokemon.img} 
        alt={pokemon.nombre} 
        style={{ width: '300px', height: 'auto' }} 
      />
      <div style={{ marginTop: '20px' }}>
        <p><strong>Número:</strong> {pokemon.numero}</p>
        <p><strong>HP:</strong> {pokemon.hp}</p>
        <p><strong>Ataque:</strong> {pokemon.ataque}</p>
        <p><strong>Defensa:</strong> {pokemon.defensa}</p>
      </div>
    </div>
  );
}