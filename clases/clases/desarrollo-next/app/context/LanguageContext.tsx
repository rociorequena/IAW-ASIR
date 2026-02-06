"use client";
import React, { createContext, useContext, useState } from 'react';

export const translations = {
  es: {
    home: "Inicio",
    contact: "Contacto",
    gen: "Generación",
    other: "Otra",
    fourth: "Cuarta",
    welcome: "Bienvenido a la Pokeapi",
    randomTitle: "Tu Pokémon Aleatorio",
    loading: "Cargando...",
    details: "Ver Detalle",
    stats: "Estadísticas",
    prev: " anterior",
    next: " siguiente",
    generatedBy: "Esta web está generada en NEXT por la alumna Rocío Requena González del IES Cura Valera.",
    notFound: "Página no encontrada",
    backHome: "Volver al Inicio"
  },
  en: {
    home: "Home",
    contact: "Contact",
    gen: "Generation",
    other: "Other",
    fourth: "Fourth",
    welcome: "Welcome to Pokeapi",
    randomTitle: "Your Random Pokemon",
    loading: "Loading...",
    details: "View Details",
    stats: "Stats",
    prev: " previous",
    next: "Next ",
    generatedBy: "This web is generated in NEXT by student Rocío Requena González from IES Cura Valera.",
    notFound: "Page not found",
    backHome: "Back to Home"
  },
  fr: {
    home: "Accueil",
    contact: "Contact",
    gen: "Génération",
    other: "Autre",
    fourth: "Quatrième",
    welcome: "Bienvenue sur Pokeapi",
    randomTitle: "Votre Pokémon Aléatoire",
    loading: "Chargement...",
    details: "Voir Détails",
    stats: "Statistiques",
    prev: "Précédent ",
    next: "Suivant ",
    generatedBy: "Ce site est généré en NEXT par l'étudiant Rocío Requena González de l'IES Cura Valera.",
    notFound: "Page non trouvée",
    backHome: "Retour à l'accueil"
  }
};

type Lang = 'es' | 'en' | 'fr';

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);