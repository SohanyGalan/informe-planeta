import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Rastreadores de Google Search y AdSense con acceso explícito al contenido público
      { userAgent: ["Googlebot", "Mediapartners-Google", "AdsBot-Google"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
