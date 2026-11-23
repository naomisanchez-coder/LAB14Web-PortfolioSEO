import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer"><div className="container footer-inner">
      <div><p className="footer-name">{personalInfo.name}<span aria-hidden="true">.</span></p><p>Aprendiendo, creando y cuidando los detalles.</p></div>
      <div className="footer-links"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(abre en otra pestaña)</span></a>{personalInfo.linkedin && <a href={personalInfo.linkedin}>LinkedIn</a>}{personalInfo.email && <a href={`mailto:${personalInfo.email}`}>Correo</a>}<p>© {new Date().getFullYear()} Naomi Sánchez</p></div>
    </div></footer>
  );
}
