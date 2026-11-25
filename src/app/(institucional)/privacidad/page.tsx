import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo trata ${site.name} los datos personales de sus visitantes.`,
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de privacidad" updated="24 de noviembre de 2026">
      <p>
        En {site.name} respetamos tu privacidad. Esta política explica qué datos se recogen cuando visitas el
        sitio, con qué finalidad y qué derechos tienes.
      </p>

      <h2>Responsable</h2>
      <p>
        El responsable del sitio y del tratamiento de los datos es el equipo editorial de {site.name}.
        Puedes contactar en{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>

      <h2>Datos que recogemos</h2>
      <ul>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita, recogidos de forma automática por el servidor y por servicios de terceros.</li>
        <li><strong>Datos que nos envías:</strong> tu correo electrónico y el contenido de tu mensaje si nos escribes.</li>
      </ul>
      <p>No pedimos registro ni recogemos datos sensibles.</p>

      <h2>Publicidad de Google AdSense</h2>
      <p>
        Este sitio utiliza Google AdSense para mostrar anuncios. Google, como proveedor externo, utiliza cookies
        para publicar anuncios basados en las visitas anteriores del usuario a este y a otros sitios web. El uso
        de cookies de publicidad permite a Google y a sus socios mostrar anuncios basados en esas visitas.
      </p>
      <p>
        Puedes inhabilitar la publicidad personalizada en la{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          configuración de anuncios de Google
        </a>
        , o la de otros proveedores en{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
          www.aboutads.info
        </a>
        . Más información sobre cómo usa Google los datos en{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          policies.google.com/technologies/partner-sites
        </a>
        .
      </p>

      <h2>Finalidad y base legal</h2>
      <ul>
        <li>Responder a tus mensajes (base legal: tu consentimiento al escribirnos).</li>
        <li>Mostrar publicidad y medir audiencia (base legal: tu consentimiento a través del aviso de cookies).</li>
        <li>Garantizar la seguridad y el funcionamiento técnico del sitio (interés legítimo).</li>
      </ul>

      <h2>Conservación</h2>
      <p>
        Los correos se conservan el tiempo necesario para atender la consulta. Los datos de cookies se rigen por
        los plazos descritos en la <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad de tus datos escribiendo a{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. También puedes presentar una
        reclamación ante la autoridad de protección de datos de tu país.
      </p>

      <h2>Menores</h2>
      <p>El sitio no está dirigido a menores de 14 años y no recoge conscientemente sus datos.</p>

      <h2>Cambios en esta política</h2>
      <p>Publicaremos cualquier cambio en esta página con su fecha de actualización.</p>
    </LegalPage>
  );
}
