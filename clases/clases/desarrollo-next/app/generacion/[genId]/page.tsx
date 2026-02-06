"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchPokemonData } from '../../api/fetchData'; 
import PokemonCard from '../../componentes/PokemonCard'; 
import { useLanguage } from '../../context/LanguageContext'; 
import "./generation.css";

const RANGES: any = { 
  gen1: [1, 151], 
  gen2: [152, 251], 
  gen3: [252, 386],
  gen4: [252, 386] 
};

export default function GenPage() {
  const params = useParams();
  const { t } = useLanguage();
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const genId = params?.genId?.toString() || '';
  const range = RANGES[genId];

  useEffect(() => {
    if (!range) { setLoading(false); return; }
    setLoading(true);
    
    const ids = Array.from({length: 10}, () => 
      Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]
    );

    Promise.all(ids.map(fetchPokemonData))
      .then(setList)
      .finally(() => setLoading(false));
  }, [genId, range]);

  if (!range) return <h2 className="gen3">Error: Generación no encontrada</h2>;

  return (
    <div>
      <h2 className="gen1">{genId.toUpperCase()} - {t.gen}</h2>
      {loading ? (
          <p className="text-center">{t.loading}</p>
      ) : (
        <div className="row">
          {list.map((p, index) => (
            <div key={index} className="col-md-3 mb-4">
              <PokemonCard pokemon={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}