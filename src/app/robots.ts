import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/", "/admin/"] },
    ],
    // No se bloquea /_next/: contiene imágenes, CSS y JavaScript públicos.
    // Estas reglas no sustituyen autenticación en futuras rutas privadas.
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
