import Link from "next/link";
import type { ReportMeta } from "@/lib/reports";

type Props = { prev?: Pick<ReportMeta, "slug" | "title">; next?: Pick<ReportMeta, "slug" | "title"> };

/** Navegación secuencial "Informe anterior / Siguiente informe". */
export default function ChapterNav({ prev, next }: Props) {
  if (!prev && !next) return null;
  return (
    <nav className="chapter-nav" aria-label="Navegación entre informes">
      {prev && (
        <Link href={`/informe/${prev.slug}`} rel="prev">
          <span className="dir">← Informe anterior</span>
          <span className="ttl">{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`/informe/${next.slug}`} rel="next" className="next">
          <span className="dir">Siguiente informe →</span>
          <span className="ttl">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
