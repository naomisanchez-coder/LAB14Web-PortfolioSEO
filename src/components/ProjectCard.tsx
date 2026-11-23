import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image"><Image src={project.image} alt={project.imageAlt} fill loading="lazy" sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1168px) calc((100vw - 76px) / 2), 546px" /></div>
      <div className="card-body">
        <p className="card-label">Ejemplo académico{project.featured ? " · Destacado" : ""}</p>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label={`Tecnologías de ${project.title}`}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <Link className="text-link" href={`/projects/${project.slug}`}>Explorar proyecto<span className="sr-only">: {project.title}</span></Link>
      </div>
    </article>
  );
}
