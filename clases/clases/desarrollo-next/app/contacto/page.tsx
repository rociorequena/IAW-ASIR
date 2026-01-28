"use client";
import { useLanguage } from "../context/LanguageContext";
import "./contact.css";

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="cont1">
      <h2 className="mb-4">{t.contact}</h2>
      <p className="cont2">
        {t.generatedBy}
      </p>
    </div>
  );
}