"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = { slot: string; format?: "auto" | "fluid" | "rectangle"; minHeight?: number };

/**
 * Bloque de anuncio con altura reservada para evitar saltos de diseño (CLS).
 * No renderiza nada mientras no existan el ID de editor y el ID del bloque.
 * Solo se usa en informes (contenido editorial); nunca en 404, legales, contacto ni secciones.
 */
export default function AdSlot({ slot, format = "auto", minHeight = 280 }: Props) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!site.adsenseClient || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* el script de AdSense aún no ha cargado */
    }
  }, []);

  if (!site.adsenseClient || !slot) return null;

  return (
    <aside className="ad-slot" style={{ minHeight }} aria-label="Publicidad">
      <div className="ad-label">Publicidad</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: minHeight - 20 }}
        data-ad-client={site.adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
