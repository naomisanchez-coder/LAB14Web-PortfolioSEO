import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/projects", {
  title: "Proyectos",
  description: "Explora tres proyectos de ejemplo académico: E-commerce Platform, Task Manager App y Weather Dashboard. Laboratorio de Next.js y SEO de Naomi Sánchez.",
});

export default function ProjectsPage() {
  return <main id="main-content" className="container"><header className="page-heading"><p className="eyebrow">Portafolio académico</p><h1>Ideas para explorar.<br /><span>Proyectos para aprender.</span></h1><p className="lead">Tres ejemplos de la guía, distintas tecnologías y una oportunidad para practicar una web más rápida y fácil de descubrir.</p></header><p className="section-intro">Estas son fichas demostrativas del laboratorio, no aplicaciones reales creadas por mí. No se incluyen demos ni repositorios ficticios.</p><section aria-label="Todos los proyectos académicos" className="project-grid projects-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section></main>;
}
