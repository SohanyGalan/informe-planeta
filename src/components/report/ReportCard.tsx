import Image from "next/image";
import Link from "next/link";
import type { ReportMeta } from "@/lib/reports";
import { getSection } from "@/lib/site";

export default function ReportCard({ report }: { report: ReportMeta }) {
  const section = getSection(report.section);
  return (
    <Link href={`/informe/${report.slug}`} className="report-card">
      {report.image ? (
        <div className="card-image">
          <Image src={report.image} alt={report.imageAlt} fill sizes="(max-width: 640px) 100vw, 380px" />
        </div>
      ) : (
        <div className={`band cover-${report.section}`} aria-hidden="true" />
      )}
      <div className="body">
        <span className="eyebrow">{section?.name}</span>
        <h3>{report.title}</h3>
        <p>{report.description}</p>
        <span className="meta">{report.readingMinutes} min de lectura</span>
      </div>
    </Link>
  );
}
