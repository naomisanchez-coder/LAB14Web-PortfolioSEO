import Image from "next/image";
import Link from "next/link";
import { personalInfo, skills } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about", {
  title: "Sobre mí",
  description: "Soy Naomi Sánchez, estudiante de Desarrollo de Software y desarrolladora web en formación. Conoce mi aprendizaje en Next.js, TypeScript, accesibilidad y SEO.",
});

export default function AboutPage() {
  return <main id="main-content" className="container"><header className="page-heading"><p className="eyebrow">Un poco sobre mí</p><h1>Aprender haciendo.<br /><span>Crecer con cada detalle.</span></h1></header><div className="about-layout"><figure className="about-image"><Image src={personalInfo.avatar} alt="Naomi Sánchez, estudiante de Desarrollo de Software" width={1254} height={1254} loading="lazy" sizes="(max-width: 760px) 300px, (max-width: 1168px) 33vw, 405px" /><figcaption>Naomi Sánchez · Desarrollo de Software</figcaption></figure><div className="about-copy"><h2>Hola, soy Naomi Sánchez</h2><p>{personalInfo.description}</p><p>En este laboratorio pongo en práctica la construcción de un portafolio con Next.js, TypeScript y Tailwind CSS. Me enfoco en organizar los componentes, mejorar la carga de imágenes y preparar metadatos que describan cada página.</p><h2>Mi enfoque de aprendizaje</h2><p>Practico cómo transformar una idea en una interfaz clara, adaptable a móviles y accesible. Este portafolio documenta un ejercicio académico; los proyectos del listado son ejemplos de la guía y no experiencia laboral.</p><h2>Herramientas y habilidades en formación</h2><ul className="skill-grid">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><div className="actions"><a className="button" href={personalInfo.github} target="_blank" rel="noopener noreferrer">Mi perfil de GitHub<span className="sr-only"> (abre en otra pestaña)</span></a><Link href="/projects" className="button secondary">Explorar ejemplos</Link></div></div></div></main>;
}
