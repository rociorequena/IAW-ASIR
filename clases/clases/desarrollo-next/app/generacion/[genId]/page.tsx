"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchPokemonData } from '../../api/fetchData';
import PokemonCard from '../../componentes/PokemonCard';
import { useLanguage } from '../../context/LanguageContext';
import "./generation.css";

const RANGES: any = { gen1: [1, 151], gen2: [152, 251], gen3: [252, 386] };

export default function GenPage() {
  const params = useParams();
  const { t } = useLanguage();
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const genId = params?.genId && typeof params.genId === 'string' ? params.genId : '';
  const range = RANGES[genId];

  useEffect(() => {
    if (!range) { setLoading(false); return; }
    setLoading(true);
    const ids = Array.from({length: 10}, () => Math.floor(Math.random()*(range[1]-range[0]))+range[0]);
    Promise.all(ids.map(fetchPokemonData)).then(setList).finally(()=>setLoading(false));
  }, [genId]);

  if (!range) return <h2 className="gen3">{t.err}</h2>;

  return (
    <div>
      <h2 className="gen1">{genId} - {t.gen}</h2>
      {loading ? (
          <div className="gen2"><h3>{t.loading}</h3></div>
      ) : (
          <div className="row g-3 justify-content-center">
            {list.map((p, i) => (
              <div key={i} className="col-12 col-md-4 col-lg-3">
                 {/* Ya no pasamos funciones raras, solo el pokemon */}
                 <PokemonCard pokemon={p} />
              </div>
            ))}
          </div>
      )}
    </div>
  );
}