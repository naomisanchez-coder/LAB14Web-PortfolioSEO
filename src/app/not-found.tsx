import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="container section"><p className="eyebrow">Error 404</p><h1>Esta página<br /><span>no está por aquí.</span></h1><p className="lead">El proyecto o la página que buscas no existe. Puedes seguir explorando los ejemplos del laboratorio.</p><div className="actions"><Link href="/projects" className="button">Explorar proyectos</Link><Link href="/" className="button secondary">Volver al inicio</Link></div></main>;
}
