import Link from "next/link";

type Props = { title: string; intro?: string; updated?: string; children: React.ReactNode };

export default function LegalPage({ title, intro, updated, children }: Props) {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link> / {title}
        </nav>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </header>
      <div className="legal prose">
        {updated && <p className="updated">Última actualización: {updated}</p>}
        {children}
      </div>
    </div>
  );
}
