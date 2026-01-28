import Link from 'next/link';
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="error1">
      <h1 className="error2">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" 
        alt="Psyduck" 
        width={200} 
      />
      <Link href="/" className="btn btn-primary mt-3">
        Volver al Inicio
      </Link>
    </div>
  );
}