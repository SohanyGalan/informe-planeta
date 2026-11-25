"use client";

import { openCookieSettings } from "@/lib/consent";

type Props = { className?: string; label?: string };

export default function CookieSettingsButton({ className = "link-button", label = "Configurar cookies" }: Props) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      {label}
    </button>
  );
}
