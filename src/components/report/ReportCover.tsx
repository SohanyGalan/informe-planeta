import Image from "next/image";
import type { ReportMeta } from "@/lib/reports";

/** Imagen de portada del informe con su crédito. No renderiza nada si aún no hay imagen. */
export default function ReportCover({ report }: { report: ReportMeta }) {
  if (!report.image) return null;
  return (
    <figure className="report-cover">
      <Image
        src={report.image}
        alt={report.imageAlt}
        width={1440}
        height={810}
        sizes="(max-width: 800px) 100vw, 800px"
        priority
      />
      {report.imageCredit && (
        <figcaption>
          Foto:{" "}
          {report.imageCreditUrl ? (
            <a href={report.imageCreditUrl} target="_blank" rel="noopener noreferrer">
              {report.imageCredit}
            </a>
          ) : (
            report.imageCredit
          )}
        </figcaption>
      )}
    </figure>
  );
}
