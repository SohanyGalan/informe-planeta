# Informe Planeta

Informe digital divulgativo sobre ecosistemas, crisis ambiental y acción sostenible, construido con **Next.js 16 + MDX**. Pensado para cumplir los requisitos de Google AdSense: contenido modular por capítulos, fuentes citadas y páginas legales completas.

## Contenido

- **20 informes** en `content/informes/*.mdx`, repartidos en cuatro capítulos: Ecosistemas, Crisis y Datos, Acción Sostenible y Dossiers.
- Portada tipo resumen ejecutivo con un **planeta 3D** (three.js) que rota: un hemisferio sano y otro dañado.
- Párrafos destacados con **ilustraciones SVG animadas** (`<Escena tipo="sequia">…</Escena>`).
- Páginas institucionales: Sobre el proyecto, Fuentes y metodología, Contacto, Privacidad, Cookies y Términos.
- Aviso de cookies con **Google Consent Mode v2**, sitemap, robots, `ads.txt` y datos estructurados.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
```

## Configuración

Copia `.env.example` a `.env.local` y rellena:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (sitemap, canónicas, Open Graph) |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | ID de editor `ca-pub-…`; si está vacío no se carga AdSense |
| `NEXT_PUBLIC_USE_GOOGLE_CMP` | `true` para usar la CMP certificada de Google en lugar del aviso propio |
| `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE` | ID del bloque manual (`data-ad-slot`) al final de cada informe; vacío = sin bloque |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo real de contacto (debe funcionar: AdSense lo revisa) |

Sustituye también `pub-0000000000000000` por tu ID de editor en `public/ads.txt` (el mismo número que `ca-pub-…`, sin `ca-`).

### Dónde se muestran anuncios

- **Habilitados:** solo `/informe/[slug]`, con un bloque manual tras el cuerpo del informe (antes de las fuentes).
- **Bloqueados:** `/`, `/seccion/*`, `/sobre-el-proyecto` (y `/acerca-de`), `/fuentes`, `/contacto`, `/privacidad`, `/cookies`, `/terminos` y la página 404.

El script de AdSense se carga en todas las páginas (Google lo necesita para verificar el sitio). Si activas **anuncios automáticos** en el panel, añade en *Anuncios > Exclusiones de páginas* las rutas bloqueadas para que Google no inserte anuncios en ellas.

Para tráfico del EEE, Reino Unido y Suiza crea un mensaje de consentimiento en *AdSense > Privacidad y mensajes* (CMP certificada, TCF v2.3) y pon `NEXT_PUBLIC_USE_GOOGLE_CMP=true`.

## Añadir un informe

Crea un `.mdx` en `content/informes/` con este frontmatter:

```yaml
---
title: "Título del informe"
description: "Resumen de una o dos frases."
imageAlt: "Descripción de la imagen de portada"
section: ecosistemas # ecosistemas | crisis-y-datos | accion-sostenible | dossiers
order: 6
date: 2026-12-01
keyPoints:
  - "Punto clave 1"
sources:
  - name: "Organismo: publicación"
    url: "https://..."
---
```

Componentes disponibles en MDX: `<Callout type="dato|accion|alerta">`, `<SourceBadge>`, `<StatCard>` y `<Escena tipo="...">`.

## Imágenes

Guarda la portada de cada informe en `public/images/informes/<slug>.webp` (también `.jpg` o `.png`). La guía con búsquedas sugeridas está en [IMAGENES.md](IMAGENES.md).
