import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sections, type SectionSlug } from "./site";

const DIR = path.join(process.cwd(), "content", "informes");

export type ReportMeta = {
  slug: string;
  title: string;
  description: string;
  section: SectionSlug;
  date: string;
  updated?: string;
  order: number;
  keyPoints: string[];
  sources: { name: string; url?: string }[];
  readingMinutes: number;
  words: number;
  /** Ruta pública de la imagen de portada, si existe un archivo en public/images/informes/<slug>.* */
  image?: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditUrl?: string;
};

const IMG_DIR = path.join(process.cwd(), "public", "images", "informes");
const IMG_EXT = ["webp", "avif", "jpg", "jpeg", "png"];

/** Busca public/images/informes/<slug>.(webp|avif|jpg|jpeg|png). Basta con soltar el archivo ahí. */
function findImage(slug: string): string | undefined {
  for (const ext of IMG_EXT) {
    if (fs.existsSync(path.join(IMG_DIR, `${slug}.${ext}`))) return `/images/informes/${slug}.${ext}`;
  }
  return undefined;
}

export type Report = ReportMeta & { content: string };

function countWords(text: string) {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_>`\-\[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function readReport(file: string): Report {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = countWords(content);
  const slug = file.replace(/\.mdx$/, "");
  return {
    slug,
    image: findImage(slug),
    imageAlt: data.imageAlt ?? data.title,
    imageCredit: data.imageCredit,
    imageCreditUrl: data.imageCreditUrl,
    title: data.title,
    description: data.description,
    section: data.section,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    updated: data.updated
      ? data.updated instanceof Date
        ? data.updated.toISOString().slice(0, 10)
        : String(data.updated)
      : undefined,
    order: Number(data.order ?? 99),
    keyPoints: data.keyPoints ?? [],
    sources: data.sources ?? [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
    words,
    content,
  };
}

const sectionIndex = (s: SectionSlug) => sections.findIndex((x) => x.slug === s);

/** Todos los informes en orden de lectura: por capítulo y luego por `order`. */
export function getAllReports(): Report[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readReport)
    .sort((a, b) => sectionIndex(a.section) - sectionIndex(b.section) || a.order - b.order);
}

export function getReport(slug: string): Report | undefined {
  return getAllReports().find((r) => r.slug === slug);
}

export function getReportsBySection(section: string): Report[] {
  return getAllReports().filter((r) => r.section === section);
}

export function getLatestReports(n: number): Report[] {
  return [...getAllReports()].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, n);
}

export function getAdjacent(slug: string) {
  const all = getAllReports();
  const i = all.findIndex((r) => r.slug === slug);
  return { prev: i > 0 ? all[i - 1] : undefined, next: i >= 0 && i < all.length - 1 ? all[i + 1] : undefined };
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
