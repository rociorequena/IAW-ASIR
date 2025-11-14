interface CardProps {
  tituloSuperior: string;
  titulo: string;
  imagen: string;
}

export default function Card({ tituloSuperior, titulo, imagen }: CardProps) {
  return (
    <article className="card">
      <h4>{tituloSuperior}</h4>
      <h3>{titulo}</h3>
      <img src={imagen} alt={titulo} />
    </article>
  );
}
