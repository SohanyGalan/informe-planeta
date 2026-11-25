import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description: `Misión educativa y equipo editorial de ${site.name}.`,
  alternates: { canonical: "/sobre-el-proyecto" },
};

export default function AboutPage() {
  return (
    <LegalPage
      title="Sobre el proyecto"
      intro="Un informe digital abierto para entender los ecosistemas del planeta y lo que podemos hacer por ellos."
    >
      <h2>Nuestra misión</h2>
      <p>
        {site.name} nace con un objetivo educativo: explicar de forma clara y rigurosa cómo funcionan los
        ecosistemas de la Tierra, qué presiones los están transformando y qué acciones tienen un impacto real.
        Queremos que cualquier persona, sin formación científica previa, pueda leer un informe y salir con una
        idea precisa del problema y de sus soluciones.
      </p>

      <h2>Cómo está organizado</h2>
      <p>El informe se divide en cuatro capítulos que se leen en orden o de forma independiente:</p>
      <ul>
        <li><strong>Ecosistemas:</strong> el funcionamiento de bosques, océanos, arrecifes, humedales y desiertos.</li>
        <li><strong>Crisis y Datos:</strong> cambio climático, deforestación, contaminación y pérdida de biodiversidad.</li>
        <li><strong>Acción Sostenible:</strong> guías prácticas para reducir la huella ecológica en el día a día.</li>
        <li><strong>Dossiers:</strong> casos de estudio y análisis en profundidad por región o por tema.</li>
      </ul>

      <h2>Independencia editorial</h2>
      <p>
        Los contenidos se redactan de forma original y no están patrocinados. El sitio se financia mediante
        publicidad gestionada por Google AdSense, que se muestra claramente identificada y nunca condiciona
        lo que publicamos.
      </p>

      <h2>Rigor y correcciones</h2>
      <p>
        Todas las cifras proceden de organismos científicos e instituciones internacionales, y se citan al pie
        de cada informe. Puedes consultar el detalle en <Link href="/fuentes">Fuentes y metodología</Link>.
        Si detectas un error, escríbenos desde la página de <Link href="/contacto">contacto</Link> y lo
        revisaremos.
      </p>
    </LegalPage>
  );
}
