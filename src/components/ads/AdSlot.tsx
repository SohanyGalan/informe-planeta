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
 * No renderiza nada mientras no exista NEXT_PUBLIC_ADSENSE_CLIENT.
 */
export default function AdSlot({ slot, format = "auto", minHeight = 280 }: Props) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!site.adsenseClient || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* el script de AdSense aún no ha cargado */
    }
  }, []);

  if (!site.adsenseClient) return null;

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
