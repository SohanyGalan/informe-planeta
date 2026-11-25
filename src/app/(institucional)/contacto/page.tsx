import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Cómo contactar con el equipo editorial de ${site.name}.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <LegalPage title="Contacto" intro="Correcciones, propuestas de temas o colaboraciones: te leemos.">
      <h2>Escríbenos</h2>
      <p>
        Puedes contactar con el equipo editorial en{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Respondemos normalmente en un plazo de
        3 a 5 días laborables.
      </p>

      <h2>Qué puedes enviarnos</h2>
      <ul>
        <li><strong>Correcciones:</strong> indica el informe, el dato y la fuente que lo respalda.</li>
        <li><strong>Sugerencias de temas:</strong> ecosistemas, regiones o problemas que te gustaría ver tratados.</li>
        <li><strong>Colaboraciones:</strong> si eres investigador, docente o divulgador y quieres aportar un dossier.</li>
      </ul>

      <h2>Privacidad</h2>
      <p>
        Solo utilizamos tu dirección de correo para responder a tu mensaje. Más información en nuestra política
        de privacidad.
      </p>
    </LegalPage>
  );
}
