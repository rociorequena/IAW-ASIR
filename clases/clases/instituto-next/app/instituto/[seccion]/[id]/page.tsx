import { notFound } from "next/navigation";

interface PageProps { 
  params: Promise<{ seccion: string; id: string }> 
}

export default async function Page({ params }: PageProps) {
  const { seccion, id } = await params; 

  return (
    <div className="container mt-5">
      <div className="card-1">
        <p className="txt-f">
          Id de la página: <strong>{id}</strong> 
        </p>
      </div>
    </div>
  );
}