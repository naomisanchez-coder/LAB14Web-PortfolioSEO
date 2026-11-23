import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export default function Home() {
  return (
    <main id="main-content" className="container">
      <section className="hero" aria-labelledby="intro-title">
        <div><p className="eyebrow">Código con intención</p><h1 id="intro-title">Hola, soy<br /><span>Naomi Sánchez.</span></h1><p className="hero-role">{personalInfo.title}</p><p className="lead">{personalInfo.description}</p><div className="actions"><Link href="/projects" className="button">Ver proyectos</Link><Link href="/contact" className="button secondary">Contactar</Link></div><p className="hero-note">Desarrollo de Software · Aprendizaje continuo</p></div>
        <figure className="portrait-card"><Image src={personalInfo.avatar} alt="Fotografía profesional de Naomi Sánchez" width={1254} height={1254} loading="eager" fetchPriority="high" sizes="(max-width: 480px) calc(100vw - 100px), (max-width: 760px) 314px, (max-width: 1168px) 28vw, 324px" /><figcaption className="portrait-caption"><strong>Ideas que se convierten en código.</strong><span>Estudiante de Desarrollo de Software</span></figcaption></figure>
      </section>
      <div className="tech-strip" aria-label="Tecnologías en aprendizaje"><span>MI CAJA DE HERRAMIENTAS</span><strong>Next.js</strong><strong>TypeScript</strong><strong>Tailwind CSS</strong><strong>Git</strong></div>
      <section className="section" aria-labelledby="featured-title"><div className="section-heading"><div><p className="eyebrow">Explorar y aprender</p><h2 id="featured-title">Proyectos destacados</h2></div><Link className="text-link" href="/projects">Todos los proyectos</Link></div><p className="section-intro">Una selección de los ejemplos de la guía del laboratorio. Sus fichas permiten practicar rutas dinámicas, imágenes y SEO; no representan proyectos reales desarrollados por mí.</p><div className="project-grid">{projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} headingLevel={3} />)}</div></section>
      <section className="about-banner" aria-labelledby="learning-title"><div><h2 id="learning-title">En formación. Siempre creando.</h2><p>Mi siguiente paso es seguir conectando lo que aprendo con interfaces accesibles y experiencias web claras.</p></div><Link href="/about" className="button secondary">Mi camino de aprendizaje</Link></section>
    </main>
  );
}
