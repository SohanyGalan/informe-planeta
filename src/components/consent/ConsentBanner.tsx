"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent, googleCmpEnabled } from "@/lib/consent";

/** Aviso de cookies con opción de aceptar, rechazar o configurar por categorías. */
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [ads, setAds] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (googleCmpEnabled) return;
    const current = readConsent();
    if (!current) setOpen(true);
    const onOpen = () => {
      const c = readConsent();
      setAds(c?.ads ?? false);
      setAnalytics(c?.analytics ?? false);
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  if (googleCmpEnabled || !open) return null;

  const decide = (a: boolean, an: boolean) => {
    saveConsent(a, an);
    setOpen(false);
    setSettings(false);
  };

  return (
    <div className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title">
      <div className="consent-card">
        <h2 id="consent-title">Tu privacidad</h2>
        <p>
          Usamos cookies técnicas necesarias para que el sitio funcione y, si lo aceptas, cookies de
          publicidad de Google AdSense para mostrar anuncios personalizados y cookies de analítica para
          medir las visitas. Puedes cambiar tu elección cuando quieras desde «Configurar cookies», al pie
          de la página. Más información en la <Link href="/cookies">política de cookies</Link>.
        </p>

        {settings && (
          <fieldset className="consent-options">
            <legend className="sr-only">Categorías de cookies</legend>
            <label className="consent-option">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Necesarias</strong>
                <small>Funcionamiento básico y recordar tu elección. Siempre activas.</small>
              </span>
            </label>
            <label className="consent-option">
              <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
              <span>
                <strong>Publicidad personalizada</strong>
                <small>Google AdSense adapta los anuncios a tus intereses. Si la desactivas, verás anuncios no personalizados.</small>
              </span>
            </label>
            <label className="consent-option">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span>
                <strong>Analítica</strong>
                <small>Estadísticas anónimas y agregadas sobre las páginas más leídas.</small>
              </span>
            </label>
          </fieldset>
        )}

        <div className="consent-actions">
          <button type="button" className="btn btn-ghost" onClick={() => decide(false, false)}>
            Rechazar
          </button>
          {settings ? (
            <button type="button" className="btn btn-ghost" onClick={() => decide(ads, analytics)}>
              Guardar selección
            </button>
          ) : (
            <button type="button" className="btn btn-ghost" onClick={() => setSettings(true)}>
              Configurar
            </button>
          )}
          <button type="button" className="btn" onClick={() => decide(true, true)}>
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
