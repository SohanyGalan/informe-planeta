import SourceBadge from "./SourceBadge";

type Props = { value: string; label: string; source: string; sourceUrl?: string };

/** Tarjeta de cifra clave con su fuente citada. */
export default function StatCard({ value, label, source, sourceUrl }: Props) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <p className="stat-label">{label}</p>
      <SourceBadge source={source} url={sourceUrl} />
    </div>
  );
}
