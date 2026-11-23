import type { Metadata } from "next";
import type { ProjectMetadata } from "@/types";
import { personalInfo } from "@/lib/data";

export function pageMetadata(path: string, info: ProjectMetadata): Metadata {
  const title = `${info.title} | ${personalInfo.name}`;
  const images = [{ url: info.ogImage ?? "/images/og-portfolio.png", alt: info.ogImage ? `Imagen ilustrativa de ${info.title}` : "Naomi Sánchez, portafolio académico" }];
  return {
    title: info.title,
    description: info.description,
    keywords: info.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website", locale: "es_PE", siteName: personalInfo.name,
      title, description: info.description, url: path, images,
    },
    twitter: { card: "summary_large_image", title, description: info.description, images },
  };
}
