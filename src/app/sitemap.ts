import type { MetadataRoute } from "next";
import { getAllReports } from "@/lib/reports";
import { sections, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/sobre-el-proyecto", "/fuentes", "/contacto", "/privacidad", "/cookies", "/terminos"];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.3,
    })),
    ...sections.map((s) => ({
      url: `${site.url}/seccion/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...getAllReports().map((r) => ({
      url: `${site.url}/informe/${r.slug}`,
      lastModified: new Date(r.updated ?? r.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
