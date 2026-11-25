import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Fuentes y metodología",
  description: "De dónde provienen los datos del informe y cómo los verificamos.",
  alternates: { canonical: "/fuentes" },
};

const sources = [
  { name: "IPCC: Grupo Intergubernamental de Expertos sobre el Cambio Climático", url: "https://www.ipcc.ch/" },
  { name: "PNUMA: Programa de las Naciones Unidas para el Medio Ambiente", url: "https://www.unep.org/es" },
  { name: "FAO: Organización de las Naciones Unidas para la Alimentación y la Agricultura", url: "https://www.fao.org/home/es" },
  { name: "IPBES: Plataforma Intergubernamental sobre Biodiversidad y Servicios de los Ecosistemas", url: "https://www.ipbes.net/" },
  { name: "NASA Earth Science / NASA Climate", url: "https://science.nasa.gov/climate-change/" },
  { name: "NOAA: Administración Nacional Oceánica y Atmosférica (EE. UU.)", url: "https://www.noaa.gov/" },
  { name: "WWF: Informe Planeta Vivo", url: "https://www.worldwildlife.org/pages/living-planet-report" },
  { name: "Global Forest Watch (World Resources Institute)", url: "https://www.globalforestwatch.org/" },
  { name: "OCDE: Perspectivas mundiales sobre los plásticos", url: "https://www.oecd.org/environment/plastics/" },
  { name: "Convención de Ramsar sobre los Humedales", url: "https://www.ramsar.org/es" },
];

export default function SourcesPage() {
  return (
    <LegalPage
      title="Fuentes y metodología"
      intro="Cómo seleccionamos, verificamos y citamos cada dato que aparece en el informe."
    >
      <h2>Principios</h2>
      <ul>
        <li><strong>Fuente primaria siempre:</strong> citamos el informe original del organismo que produjo el dato, no notas de prensa ni agregadores.</li>
        <li><strong>Fecha visible:</strong> cada cifra va acompañada del año del informe del que procede.</li>
        <li><strong>Redacción propia:</strong> explicamos los datos con nuestras palabras; no copiamos textos de enciclopedias ni de otros medios.</li>
        <li><strong>Prudencia con las estimaciones:</strong> cuando un dato es un rango o una estimación, lo decimos y usamos el valor central con su contexto.</li>
        <li><strong>Revisión periódica:</strong> cuando un organismo publica una actualización, revisamos el informe y anotamos la fecha de actualización.</li>
      </ul>

      <h2>Organismos de referencia</h2>
      <p>Estas son las instituciones cuyos informes utilizamos con más frecuencia:</p>
      <ul>
        {sources.map((s) => (
          <li key={s.name}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>

      <h2>Cómo se presenta una cifra</h2>
      <p>
        En los informes verás los datos destacados en recuadros con una etiqueta «Fuente» que enlaza a la
        publicación original. Al final de cada informe hay una lista completa de las fuentes consultadas.
      </p>

      <h2>Imágenes</h2>
      <p>
        Las fotografías proceden de bancos de imágenes libres de derechos (como Unsplash o Pexels) o son de
        producción propia. Se indican en el pie de foto cuando la licencia lo requiere.
      </p>

      <h2>Correcciones</h2>
      <p>
        Si encuentras un dato desactualizado o incorrecto, escríbenos indicando el informe y la fuente
        correcta. Las correcciones relevantes se señalan al final del informe afectado.
      </p>
    </LegalPage>
  );
}
