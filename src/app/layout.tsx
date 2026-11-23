import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata("/", { title: "Portafolio web", description: personalInfo.description }),
  metadataBase: new URL(personalInfo.siteUrl),
  title: { default: "Naomi Sánchez | Desarrolladora web en formación", template: "%s | Naomi Sánchez" },
  keywords: ["Naomi Sánchez", "portafolio académico", "desarrollo web", "Next.js", "TypeScript", "SEO"],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Añadir verification únicamente después de obtener un código real.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><a className="skip-link" href="#main-content">Saltar al contenido</a><Header />{children}<Footer /></body></html>;
}
