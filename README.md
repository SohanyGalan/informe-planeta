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

Ajusta también el correo de contacto en `src/lib/site.ts` y tu ID de editor en `public/ads.txt`.

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
