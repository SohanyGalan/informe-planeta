import type { Metadata } from "next";
import Link from "next/link";
import StatCard from "@/components/report/StatCard";
import ReportCard from "@/components/report/ReportCard";
import PlanetPanel from "@/components/planet/PlanetPanel";
import { globalStats } from "@/data/globalStats";
import { getLatestReports, getReportsBySection } from "@/lib/reports";
import { sections, site } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const latest = getLatestReports(6);

  return (
    <>
      <section className="hero container">
        <div className="hero-text">
        <span className="eyebrow">Informe {new Date().getFullYear()} · Resumen ejecutivo</span>
        <h1>El estado del planeta, explicado con datos y sin alarmismo</h1>
        <p className="lead">
          {site.name} reúne en un solo informe digital cómo funcionan los ecosistemas de la Tierra, qué
          presiones los amenazan y qué acciones concretas marcan la diferencia. Cada cifra cita su fuente
          original: IPCC, FAO, ONU Medio Ambiente, NASA y otros organismos científicos.
        </p>
        <div className="hero-actions">
          <Link href="#indice" className="btn">
            Explorar el informe ↓
          </Link>
          <Link href="/fuentes" className="btn btn-ghost">
            Cómo verificamos los datos
          </Link>
        </div>
        </div>
        <PlanetPanel />
      </section>

      <section className="section-block container" aria-labelledby="indicadores">
        <div className="section-head">
          <div>
            <span className="eyebrow">Indicadores clave</span>
            <h2 id="indicadores">Cuatro cifras para entender el momento actual</h2>
          </div>
        </div>
        <div className="stats-grid">
          {globalStats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} source={s.source} sourceUrl={s.sourceUrl} />
          ))}
        </div>
      </section>

      <section id="indice" className="section-block container" aria-labelledby="capitulos">
        <div className="section-head">
          <div>
            <span className="eyebrow">Índice del informe</span>
            <h2 id="capitulos">Cuatro capítulos, de la ciencia a la acción</h2>
          </div>
        </div>
        <div className="chapters-grid">
          {sections.map((s) => {
            const n = getReportsBySection(s.slug).length;
            return (
              <Link key={s.slug} href={`/seccion/${s.slug}`} className={`chapter-card cover-${s.slug}`}>
                <span className="eyebrow">{s.chapter}</span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="count">
                  {n} {n === 1 ? "informe" : "informes"} →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {latest.length > 0 && (
        <section className="section-block container" aria-labelledby="destacados">
          <div className="section-head">
            <div>
              <span className="eyebrow">Publicaciones recientes</span>
              <h2 id="destacados">Informes destacados</h2>
            </div>
          </div>
          <div className="cards-grid">
            {latest.map((r) => (
              <ReportCard key={r.slug} report={r} />
            ))}
          </div>
        </section>
      )}

      <section className="section-block container">
        <div className="method-note">
          <span className="eyebrow">Metodología</span>
          <h2>Divulgación con fuentes, no opiniones</h2>
          <p>
            Redactamos cada informe con un enfoque propio y divulgativo, contrastando las cifras con las
            publicaciones originales de organismos científicos y agencias internacionales. Cuando un dato se
            actualiza, revisamos el informe y lo indicamos con su fecha de actualización.
          </p>
          <div>
            <Link href="/fuentes">Leer nuestra metodología completa →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
