import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact", {
  title: "Contacto",
  description: "Contacta con Naomi Sánchez, estudiante de Desarrollo de Software. Consulta su perfil público de GitHub para compartir propuestas o consultas sobre desarrollo web y móvil.",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="container">
      <header className="page-heading">
        <p className="eyebrow">Una idea puede ser el comienzo</p>
        <h1>Contacto<span>.</span></h1>
        <p className="lead">Me interesa seguir aprendiendo y conectar con personas que disfrutan crear con tecnología.</p>
      </header>
      <div className="contact-layout">
        <section className="contact-intro" aria-labelledby="contact-intro-title">
          <h2 id="contact-intro-title">Conversemos sobre ideas</h2>
          <p>Soy Naomi Sánchez, estudiante de Desarrollo de Software con interés en desarrollo web y aplicaciones móviles.</p>
          <p>Si tienes una propuesta o una consulta, visita mi perfil de GitHub y utiliza los canales públicos que tenga disponibles allí.</p>
          <Link href="/" className="button secondary">Regresar al inicio</Link>
        </section>
        <section className="contact-channel" aria-labelledby="contact-channel-title">
          <p className="eyebrow">Mi perfil público</p>
          <h2 id="contact-channel-title">Encuéntrame en GitHub</h2>
          <p className="contact-handle">@naomisanchez-coder</p>
          <p>Un espacio para conocer mi actividad académica y mi aprendizaje en desarrollo de software.</p>
          <a className="button" href={personalInfo.github} target="_blank" rel="noopener noreferrer">Visitar mi GitHub<span className="sr-only"> (abre en otra pestaña)</span></a>
          {personalInfo.email && <a className="text-link contact-extra" href={`mailto:${personalInfo.email}`}>Escribirme por correo</a>}
          {personalInfo.linkedin && <a className="text-link contact-extra" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">Mi LinkedIn<span className="sr-only"> (abre en otra pestaña)</span></a>}
        </section>
      </div>
    </main>
  );
}
