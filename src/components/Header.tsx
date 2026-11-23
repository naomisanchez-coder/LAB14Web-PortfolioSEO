"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["/", "Inicio"], ["/projects", "Proyectos"], ["/about", "Sobre mí"]];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Naomi Sánchez, inicio"><span className="brand-mark" aria-hidden="true">ns.</span><span>Naomi Sánchez<span className="brand-subtitle">PORTAFOLIO PERSONAL</span></span></Link>
        <nav aria-label="Navegación principal"><ul>{links.map(([href, label]) => <li key={href}><Link href={href} aria-current={(href === "/" ? pathname === href : pathname.startsWith(href)) ? "page" : undefined}>{label}</Link></li>)}</ul></nav>
      </div>
    </header>
  );
}
