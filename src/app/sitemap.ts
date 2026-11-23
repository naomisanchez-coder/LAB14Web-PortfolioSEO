import type { MetadataRoute } from "next";
import { contentLastModified, projects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: contentLastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: contentLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified: contentLastModified, changeFrequency: "weekly", priority: 0.9 },
    ...projects.map(({ slug }) => ({
      url: `${siteUrl}/projects/${slug}`,
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
