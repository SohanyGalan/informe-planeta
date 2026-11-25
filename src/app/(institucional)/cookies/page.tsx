import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Qué cookies utiliza ${site.name} y cómo gestionarlas.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="24 de noviembre de 2026">
      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información
        sobre tu visita, como tus preferencias o las páginas que has consultado.
      </p>

      <h2>Cookies que utilizamos</h2>
      <table>
        <thead>
          <tr><th>Tipo</th><th>Proveedor</th><th>Finalidad</th></tr>
        </thead>
        <tbody>
          <tr><td>Técnicas</td><td>{site.name}</td><td>Funcionamiento básico del sitio y recordar tu elección sobre cookies (se guarda en el almacenamiento local de tu navegador).</td></tr>
          <tr><td>Publicidad</td><td>Google AdSense</td><td>Mostrar anuncios, limitar su frecuencia y, si lo aceptas, personalizarlos.</td></tr>
          <tr><td>Analítica</td><td>Google (si está activada)</td><td>Medir de forma agregada las visitas y las páginas más leídas.</td></tr>
        </tbody>
      </table>

      <h2>Consentimiento</h2>
      <p>
        Las cookies técnicas no requieren consentimiento. En tu primera visita mostramos un aviso en el que
        puedes aceptar todas las cookies, rechazarlas o elegir por categorías. Rechazar es tan sencillo como
        aceptar, y el sitio funciona igual en ambos casos.
      </p>
      <p>
        Mientras no des tu permiso, la publicidad personalizada y la analítica permanecen desactivadas:
        utilizamos el modo de consentimiento de Google para que AdSense muestre únicamente anuncios no
        personalizados.
      </p>
      <p>
        Puedes cambiar tu elección en cualquier momento desde el enlace «Configurar cookies» al pie de cada
        página o con este botón:
      </p>
      <p>
        <CookieSettingsButton className="btn btn-ghost" label="Configurar mis cookies" />
      </p>

      <h2>Cómo desactivarlas</h2>
      <p>
        Además del aviso de cookies, puedes bloquear o eliminar cookies desde la configuración de tu navegador
        (Chrome, Firefox, Safari o Edge). Ten en cuenta que bloquear todas las cookies puede afectar al
        funcionamiento de algunos sitios.
      </p>
      <p>
        Para la publicidad de Google, puedes gestionar tus preferencias en{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          adssettings.google.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
