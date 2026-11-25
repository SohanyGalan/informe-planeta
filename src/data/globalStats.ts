export type GlobalStat = {
  value: string;
  label: string;
  source: string;
  sourceUrl?: string;
};

/**
 * Cifras de la portada. Revisa y actualiza cada dato con la publicación
 * original antes de enviar el sitio a revisión.
 */
export const globalStats: GlobalStat[] = [
  {
    value: "≈ 50 %",
    label: "del oxígeno del planeta lo produce el fitoplancton oceánico",
    source: "NOAA, National Ocean Service",
    sourceUrl: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html",
  },
  {
    value: "10 M ha",
    label: "de bosque se perdieron cada año entre 2015 y 2020",
    source: "FAO, Evaluación de los Recursos Forestales Mundiales 2020",
    sourceUrl: "https://www.fao.org/forest-resources-assessment/en/",
  },
  {
    value: "1 millón",
    label: "de especies animales y vegetales están en riesgo de extinción",
    source: "IPBES, Evaluación Mundial 2019",
    sourceUrl: "https://www.ipbes.net/global-assessment",
  },
  {
    value: "+1,1 °C",
    label: "de calentamiento global respecto a la era preindustrial (2011–2020)",
    source: "IPCC, AR6 Informe de Síntesis 2023",
    sourceUrl: "https://www.ipcc.ch/report/ar6/syr/",
  },
];
