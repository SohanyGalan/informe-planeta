import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Condiciones de uso de ${site.name}.`,
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="24 de noviembre de 2026">
      <h2>Objeto</h2>
      <p>
        Estos términos regulan el acceso y uso de {site.name}, un sitio de divulgación ambiental de acceso
        gratuito. Al navegar por el sitio aceptas estas condiciones.
      </p>

      <h2>Carácter informativo</h2>
      <p>
        Los contenidos tienen fines educativos y divulgativos. Aunque cuidamos su exactitud y citamos fuentes
        oficiales, no sustituyen el asesoramiento técnico o profesional ni la consulta de los informes
        originales.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y la estructura del sitio son obra de {site.name}. Puedes citar fragmentos breves
        con enlace a la página original. No está permitida la reproducción total de los informes sin
        autorización. Los datos de terceros pertenecen a sus respectivos organismos.
      </p>

      <h2>Enlaces externos</h2>
      <p>
        El sitio enlaza a fuentes externas para que puedas verificar los datos. No somos responsables del
        contenido ni de las políticas de esos sitios.
      </p>

      <h2>Publicidad</h2>
      <p>
        El sitio muestra anuncios de terceros identificados como «Publicidad». Su contenido es responsabilidad
        de los anunciantes y no implica respaldo por nuestra parte.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        No nos hacemos responsables de los daños derivados del uso de la información publicada ni de
        interrupciones técnicas del servicio.
      </p>

      <h2>Modificaciones</h2>
      <p>
        Podemos actualizar estos términos; la versión vigente será siempre la publicada en esta página.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
