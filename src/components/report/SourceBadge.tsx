type Props = { source: string; url?: string };

/** Etiqueta discreta para citar la fuente oficial de una cifra. */
export default function SourceBadge({ source, url }: Props) {
  return (
    <span className="source-badge">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h12l4 4v12H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span>
        Fuente:{" "}
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        ) : (
          source
        )}
      </span>
    </span>
  );
}
