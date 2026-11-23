import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return pageMetadata(`/projects/${project.slug}`, {
    title: project.title,
    description: `Ejemplo académico: ${project.description} Ficha demostrativa del laboratorio de Naomi Sánchez.`,
    keywords: [project.title, ...project.technologies, "ejemplo académico"],
    ogImage: project.image,
  });
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main id="main-content" className="container">
      <nav aria-label="Ruta de navegación" className="breadcrumb"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/projects">Proyectos</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav>
      <header><p className="eyebrow">Ejemplo académico{project.featured ? " · Destacado" : ""}</p><h1>{project.title}</h1><p className="lead">{project.description}</p></header>
      <div className="detail-hero"><Image src={project.image} alt={project.imageAlt} fill loading="eager" sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1168px) calc(100vw - 48px), 1120px" /></div>
      <div className="detail-copy"><h2>Sobre este ejemplo</h2><p className="notice">Este proyecto pertenece a los ejemplos de la guía académica. Esta página es una ficha de práctica de Next.js y SEO; no acredita la implementación de la aplicación descrita ni experiencia profesional.</p><h2>Tecnologías propuestas en la guía</h2><ul className="tags" aria-label="Tecnologías del ejemplo">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul><h2>Lo que practico con esta ficha</h2><p>Generación estática desde datos tipados, metadatos específicos por proyecto, navegación accesible y optimización de imágenes para diferentes dispositivos.</p><div className="actions">{project.demoUrl && <a className="button" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Ver demostración<span className="sr-only"> (abre en otra pestaña)</span></a>}{project.githubUrl && <a className="button secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver código<span className="sr-only"> (abre en otra pestaña)</span></a>}<Link href="/projects" className="text-link">Volver a todos los proyectos</Link></div></div>
    </main>
  );
}
