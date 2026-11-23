# Registro de instrucciones de implementación

Registro el encargo usado con Codex Desktop para desarrollar mi primera etapa del Laboratorio 14. Este archivo resume el prompt y conserva sus decisiones y restricciones relevantes; no es una transcripción literal de toda la conversación.

## Prompt principal

> Actúa como desarrollador senior especializado en Next.js, TypeScript, Tailwind CSS, optimización SEO y Git. Desarrolla la primera etapa del Laboratorio 14, Optimización y SEO, siguiendo como referencia GLAB-S14-EAREVALO-2026-1.docx. Incluye todo el procedimiento práctico de las partes 1 a 6 y sus verificaciones. No desarrolles todavía la sección TAREA.

## Contexto y alcance que indiqué

- Trabajo en macOS, con VS Code y Codex Desktop.
- Uso el repositorio público `https://github.com/naomisanchez-coder/LAB14Web-PortfolioSEO`, proyecto `LAB14Web-PortfolioSEO` y rama `main`.
- Pido comprobar Node.js, npm, Git, compatibilidad con Next.js estable, autenticación de GitHub CLI y acceso al remoto.
- Autorizo crear una carpeta nueva solo para este laboratorio, conectar el remoto vacío y publicar avances progresivos en `origin/main`.
- Exijo inspeccionar archivos antes de sobrescribirlos, no tocar otros repositorios y no modificar configuraciones globales innecesariamente.

## Requisitos de implementación

1. Creo `src/types/index.ts` con `Project` y metadatos tipados, sin `any` innecesario.
2. Creo `src/lib/data.ts` con los tres ejemplos de la guía: `ecommerce-platform`, `task-manager`, `weather-dashboard`. Conservo sus tecnologías y destacados.
3. Personalizo únicamente datos conocidos: Naomi Sánchez, estudiante de Desarrollo de Software y desarrolladora web en formación, GitHub `naomisanchez-coder`. No invento correo, LinkedIn, dominio, experiencia o años de trabajo.
4. Implemento la Metadata API nativa en el layout: metadataBase configurable, títulos y plantilla, descripción, keywords, authors, Open Graph, Twitter y robots. Verification solo con valores reales.
5. Implemento inicio, listado completo y detalles con `generateStaticParams`, `generateMetadata`, slug y `notFound`.
6. Integro Header, Footer y ProjectCard reutilizables con navegación accesible y adaptable a móviles.
7. Optimizo imágenes con `next/image`, AVIF/WebP, remotePatterns restringidos, sizes, dimensiones/proporciones, alt y lazy loading secundario. Reservo carga crítica para la imagen principal.
8. Creo Sobre mí con información académica verídica y metadatos propios.
9. Genero sitemap con seis URLs, detalles derivados del arreglo, lastModified real, changeFrequency y priority razonables.
10. Genero robots con reglas generales, Googlebot, restricciones internas del modelo y sitemap, manteniendo rastreables las rutas y recursos públicos.
11. Verifico rutas, navegación, Footer, 404, metadatos, imágenes, sitemap y robots. Ejecuto `npm run lint`, `npx tsc --noEmit` y `npm run build` y resuelvo errores antes de los commits correspondientes.
12. Preparo Lighthouse Desktop y Mobile con objetivo académico mayor a 90 en las cuatro categorías; no declaro puntuaciones sin ejecutar auditorías. Yo realizaré las capturas manuales de Chrome.

## Preferencias visuales

Solicito tema claro, acentos violeta y azul, tarjetas elegantes, bordes suaves, tipografía legible, navegación intuitiva, adaptación móvil, animaciones discretas, contraste y accesibilidad. Evito efectos costosos y dependencias innecesarias.

## Git y documentación

Solicito commits descriptivos en español por etapas, validados y publicados progresivamente. Prohíbo commits vacíos, force push y la publicación de dependencias, compilados, secretos o `.env.local`. Pido confirmar la sincronización y entregar hashes reales.

Pido README en primera persona con objetivo, tecnologías/versiones, estructura, funcionalidades, SEO, imágenes, instalación, rutas, comprobaciones, espacio para evidencias y estado de la primera etapa. Pido este `prompts.md` con el registro de instrucciones relevantes. Ambos deben estar publicados.

## Decisiones durante el desarrollo

- Consulté el texto y las imágenes de código de la guía; sus ejemplos son material de referencia. Mis instrucciones explícitas de alcance y veracidad tienen prioridad frente a sus datos de ejemplo.
- Adopté Next.js estable 16.4.6, compatible con Node.js 24.21.0, y adapté `params` asíncronos y la carga crítica de imágenes a la versión instalada.
- Seguí el `AGENTS.md` generado por Next.js consultando la documentación incluida con el paquete antes de continuar la implementación.
- Conservé un origen local configurable por `SITE_URL`, sin inventar una URL pública final.
- Omití enlaces de demo/código ficticios. Identifiqué todos los proyectos como ejemplos académicos.
- Usé un avatar ilustrativo de iniciales, no una fotografía atribuida a una persona.
- Permití recursos `/_next/` en robots para evitar bloquear imágenes, CSS y JavaScript necesarios.
- Usé una caché temporal de npm para no cambiar permisos globales.
- Añadí un verificador HTTP pequeño sin dependencias adicionales de pruebas.
- Ejecuté Lighthouse real en producción local, Desktop y Mobile. Conservé los informes JSON; no fabriqué capturas ni evidencias.
- Adapté el orden de commits a las dependencias reales: navegación y tarjetas compartidas antes de las páginas que las consumen.

## Exclusiones explícitas

No desarrollo contacto, no despliego en Vercel, no configuro dominios, no añado integraciones externas ajenas al ejercicio y no modifico otros proyectos. Esos puntos de contacto/despliegue/dominio quedan para la TAREA posterior.

## Informe de cierre solicitado

Pido resumen de las seis partes, estructura, versiones, commits publicados, resultados de lint/tipos/build, funcionalidades comprobadas, incidencias y soluciones, ruta local, repositorio, comando de inicio, capturas pendientes y alcance exclusivo de la siguiente TAREA.
