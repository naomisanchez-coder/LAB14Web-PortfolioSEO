import type { PersonalInfo, Project } from "@/types";
import { siteUrl } from "@/lib/site";

// Ejemplos de la guía académica: no son trabajos reales de Naomi.
export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&fit=crop&auto=format",
    imageAlt: "Imagen ilustrativa de diseño y desarrollo de una página web",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    featured: true,
  },
  {
    slug: "task-manager",
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con autenticación y actualizaciones en tiempo real.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&q=80&fit=crop&auto=format",
    imageAlt: "Imagen ilustrativa de un entorno de programación para una aplicación web",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    featured: true,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Dashboard interactivo del clima con gráficos y pronósticos.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80&fit=crop&auto=format",
    imageAlt: "Imagen ilustrativa de una estación de trabajo de desarrollo de software",
    technologies: ["Next.js", "Chart.js", "OpenWeather API"],
    featured: false,
  },
];

export const personalInfo: PersonalInfo = {
  name: "Naomi Sánchez",
  title: "Desarrolladora web en formación",
  description: "Soy estudiante de Desarrollo de Software. Estoy aprendiendo a crear experiencias web accesibles, rápidas y cuidadas en cada detalle.",
  github: "https://github.com/naomisanchez-coder",
  siteUrl,
  avatar: "/images/foto-perfil.png",
  // Correo y LinkedIn sin configurar: no se publican datos ficticios.
};

export const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git"];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

// Fecha real de preparación del contenido del laboratorio; actualizar al editarlo.
export const contentLastModified = new Date("2026-11-23T02:08:32+00:00");
