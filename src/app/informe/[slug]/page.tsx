import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/report/ReadingProgress";
import KeyTakeaways from "@/components/report/KeyTakeaways";
import ChapterNav from "@/components/report/ChapterNav";
import MdxContent from "@/components/report/MdxContent";
import AdSlot from "@/components/ads/AdSlot";
import ReportCover from "@/components/report/ReportCover";
import { formatDate, getAdjacent, getAllReports, getReport } from "@/lib/reports";
import { getSection, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllReports().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const r = getReport(slug);
  if (!r) return {};
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: `/informe/${r.slug}` },
    openGraph: {
      type: "article",
      title: r.title,
      description: r.description,
      publishedTime: r.date,
      modifiedTime: r.updated ?? r.date,
      ...(r.image ? { images: [{ url: r.image, alt: r.imageAlt }] } : {}),
    },
  };
}

export default async function ReportPage({ params }: Params) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) notFound();
  const section = getSection(report.section)!;
  const { prev, next } = getAdjacent(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: report.title,
    description: report.description,
    datePublished: report.date,
    dateModified: report.updated ?? report.date,
    inLanguage: "es",
    articleSection: section.name,
    wordCount: report.words,
    mainEntityOfPage: `${site.url}/informe/${report.slug}`,
    author: { "@type": "Organization", name: site.name, url: `${site.url}/sobre-el-proyecto` },
    ...(report.image ? { image: `${site.url}${report.image}` } : {}),
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    citation: report.sources.map((s) => s.url ?? s.name),
  };

  return (
    <article className="container">
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="article-head">
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link> / <Link href={`/seccion/${section.slug}`}>{section.name}</Link>
        </nav>
        <h1>{report.title}</h1>
        <p className="dek">{report.description}</p>
        <div className="article-meta">
          <span>
            {section.chapter} · {section.name}
          </span>
          <span>Publicado el {formatDate(report.date)}</span>
          {report.updated && <span>Actualizado el {formatDate(report.updated)}</span>}
          <span>{report.readingMinutes} min de lectura</span>
        </div>
      </header>

      <ReportCover report={report} />

      <KeyTakeaways points={report.keyPoints} />

      <div className="prose">
        <MdxContent source={report.content} />
      </div>

      <AdSlot slot="0000000000" />

      {report.sources.length > 0 && (
        <section className="sources-box" aria-labelledby="fuentes-informe">
          <h2 id="fuentes-informe">Fuentes consultadas</h2>
          <ol>
            {report.sources.map((s) => (
              <li key={s.name}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <ChapterNav prev={prev} next={next} />
    </article>
  );
}
