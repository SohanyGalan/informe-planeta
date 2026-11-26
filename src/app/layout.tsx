import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import ConsentBanner from "@/components/consent/ConsentBanner";
import { consentDefaultsScript, googleCmpEnabled } from "@/lib/consent";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  description: site.description,
  url: site.url,
  inLanguage: "es",
  publisher: { "@type": "Organization", name: site.name, url: site.url },
};

export const viewport: Viewport = { themeColor: "#faf8f3" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* Consent Mode v2: valores por defecto antes de cargar cualquier etiqueta de Google */}
        {!googleCmpEnabled && <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />}
        {/* Código oficial de AdSense, asíncrono y sin modificar. Solo se carga si hay ID de editor. */}
        {site.adsenseClient && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body>
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
