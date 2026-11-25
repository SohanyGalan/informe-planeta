import Link from "next/link";
import { sections, site } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  ...sections.map((s) => ({ href: `/seccion/${s.slug}`, label: s.name })),
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name}, inicio`}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{site.name}</span>
        </Link>
        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary>Menú</summary>
          <nav className="mobile-panel" aria-label="Principal (móvil)">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
