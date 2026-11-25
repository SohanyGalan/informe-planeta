import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <header className="page-hero">
        <span className="eyebrow">Error 404</span>
        <h1>Esta página no existe</h1>
        <p>Puede que el informe se haya movido. Vuelve al índice para seguir leyendo.</p>
      </header>
      <Link href="/" className="btn">
        Volver al inicio
      </Link>
    </div>
  );
}
