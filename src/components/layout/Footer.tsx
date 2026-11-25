import Link from "next/link";
import { sections, site } from "@/lib/site";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{site.name}</h3>
            <p style={{ margin: 0, maxWidth: "46ch" }}>{site.description}</p>
          </div>
          <div>
            <h3>El informe</h3>
            <ul>
              {sections.map((s) => (
                <li key={s.slug}>
                  <Link href={`/seccion/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Proyecto</h3>
            <ul>
              <li><Link href="/sobre-el-proyecto">Sobre el proyecto</Link></li>
              <li><Link href="/fuentes">Fuentes y metodología</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/privacidad">Política de privacidad</Link></li>
              <li><Link href="/cookies">Política de cookies</Link></li>
              <li><Link href="/terminos">Términos y condiciones</Link></li>
              <li><CookieSettingsButton /></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} {site.name}. Contenido divulgativo con fines educativos. Las cifras citan siempre su fuente original.
        </div>
      </div>
    </footer>
  );
}
