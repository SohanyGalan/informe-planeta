import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReportCard from "@/components/report/ReportCard";
import { getReportsBySection } from "@/lib/reports";
import { getSection, sections } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getSection(slug);
  if (!s) return {};
  return { title: s.name, description: s.description, alternates: { canonical: `/seccion/${s.slug}` } };
}

export default async function SectionPage({ params }: Params) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();
  const reports = getReportsBySection(slug);

  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link> / {section.name}
        </nav>
        <span className="eyebrow" style={{ display: "block", marginTop: 16 }}>
          {section.chapter}
        </span>
        <h1>{section.name}</h1>
        <p>{section.description}</p>
      </header>

      {reports.length ? (
        <div className="cards-grid">
          {reports.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      ) : (
        <p className="empty-note">Los informes de este capítulo se publicarán próximamente.</p>
      )}
    </div>
  );
}
