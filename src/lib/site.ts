export const site = {
  name: "Informe Planeta",
  tagline: "Ecosistemas, datos y acción para cuidar la Tierra",
  description:
    "Informe digital divulgativo sobre el estado de los ecosistemas del planeta: datos verificados, análisis de la crisis ambiental y guías prácticas de acción sostenible.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "es_ES",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@tudominio.com",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
  /** ID del bloque de anuncio manual que se muestra al final de cada informe. */
  adsenseArticleSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE || "",
};

export type SectionSlug = "ecosistemas" | "crisis-y-datos" | "accion-sostenible" | "dossiers";

export type Section = {
  slug: SectionSlug;
  name: string;
  short: string;
  description: string;
  chapter: string;
};

export const sections: Section[] = [
  {
    slug: "ecosistemas",
    name: "Ecosistemas",
    short: "Bosques, océanos, arrecifes, humedales y desiertos.",
    description:
      "Cómo funcionan los grandes sistemas vivos del planeta, qué servicios nos prestan y por qué su equilibrio es frágil.",
    chapter: "Capítulo I",
  },
  {
    slug: "crisis-y-datos",
    name: "Crisis y Datos",
    short: "Clima, deforestación, plásticos y biodiversidad.",
    description:
      "Las presiones que hoy amenazan a los ecosistemas, explicadas con cifras de organismos científicos y su contexto.",
    chapter: "Capítulo II",
  },
  {
    slug: "accion-sostenible",
    name: "Acción Sostenible",
    short: "Guías prácticas para reducir tu huella.",
    description:
      "Qué podemos hacer en casa y en comunidad: reciclaje real, ahorro de agua y energía, y consumo responsable.",
    chapter: "Capítulo III",
  },
  {
    slug: "dossiers",
    name: "Dossiers",
    short: "Casos de estudio e informes en profundidad.",
    description:
      "Análisis extensos por región o por tema: conservación costera, energías renovables, economía circular y más.",
    chapter: "Capítulo IV",
  },
];

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}
