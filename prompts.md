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


---

## Continuación cronológica — TAREA final

### Objetivo de esta etapa

Continúo el portafolio existente del Laboratorio 14, incorporo mi fotografía real, mejoro el diseño, agrego Contacto y preparo el SEO para un despliegue manual en Vercel. Conservo la primera etapa y sus 12 commits originales, cuyo cierre fue `c743ba3`.

### Prompt de implementación recibido

> Actúa como desarrollador senior especializado en Next.js, TypeScript, Tailwind CSS, SEO técnico, diseño UI/UX y Git. Completa la sección TAREA como continuación del proyecto existente: fotografía profesional, mejoras visuales, página de contacto funcional, sitemap de siete URLs, robots y metadatos coherentes, preparación para Vercel, verificaciones y commits progresivos. No realices el despliegue; lo haré manualmente.

Este registro resume el nuevo encargo; no sustituye ni borra el prompt de la primera etapa.

### Instrucciones adicionales relevantes

- Inspeccionar estructura, Git, sincronización, README, prompts, AGENTS, componentes, configuración, imágenes, rutas y pruebas antes de modificar.
- Trabajar exclusivamente en `main`, sin reescribir los 12 commits previos, recrear el repositorio ni tocar otros proyectos.
- Utilizar solo mi `FotoFormal.png` original; no generar rostros, modificar rasgos, aplicar filtros, reconocimiento facial o APIs externas de procesamiento.
- Mantener la fotografía estática en Inicio y Sobre mí con `next/image`, alt, dimensiones, sizes y carga prioritaria solo donde corresponde.
- Repartir blanco cálido, azul suave, gris claro y violeta moderado entre superficies; mejorar jerarquía, espaciados, tarjetas, Header/Footer y adaptación móvil sin dependencias grandes.
- Conservar los tres proyectos académicos, sus slugs, sus tecnologías y sus rutas dinámicas; no inventar demos, experiencia laboral ni certificaciones.
- Agregar `/contact` con presentación, invitación a propuestas/consultas, GitHub real y regreso a Inicio. Correo y LinkedIn solo si están confirmados. No crear formularios ficticios ni backend.
- Añadir Contacto a navegación y sitemap, manteniendo los detalles generados desde los datos y permitiendo rastreo de páginas e imágenes públicas.
- Reutilizar el origen configurable de SEO, evitar localhost en Vercel y documentar el valor público real cuando exista. No inventar dominios.
- No iniciar sesión ni crear proyectos en Vercel, no desplegar, comprar dominios, cambiar DNS o activar servicios externos.
- No ejecutar kill ni sudo ni detener procesos de otros proyectos. Permitir producción local con `npm run start -- -p 3001` si el puerto está libre.
- Ejecutar lint, TypeScript, build, verify:seo y auditorías reales de producción. No simular puntuaciones ni generar capturas o carpetas de evidencias.
- Actualizar README en primera persona con ambas etapas, ejecución, Vercel pendiente de despliegue manual, resultados reales y cinco conclusiones; agregar esta continuación al registro previo.

### Cambios realizados

1. Copié la fotografía sin cambiar sus bytes a `public/images/foto-perfil.png`, y reutilicé el campo `personalInfo.avatar` en las dos páginas.
2. Mejoré la paleta por superficies, el marco estático del perfil, la tipografía, las tarjetas y el responsive, preservando Tailwind CSS.
3. Implementé Contacto con la Metadata API existente y el enlace real de GitHub, sin correo inventado ni formulario.
4. Actualicé Header, Footer y los botones de Inicio para acceder a Contacto.
5. Añadí Contacto al sitemap, actualicé la fecha real del contenido y comprobé las reglas existentes de robots para las siete URLs.
6. Reutilicé `SITE_URL`, agregué el fallback de dominio real `VERCEL_PROJECT_PRODUCTION_URL` y pruebas de rechazo de localhost/HTTP/puertos locales en Vercel.
7. Extendí el verificador sin borrar comprobaciones anteriores: Contacto, fotografía, enlaces internos y configuración del origen.
8. Conservé los informes históricos Lighthouse. No añadí archivos nuevos de capturas ni carpetas de evidencias.

### Resultados de validación

- `npm run lint`, `npx tsc --noEmit` y `npm run build`: aprobados.
- `TEST_BASE_URL=http://localhost:3002 SITE_URL=http://localhost:3002 npm run verify:seo`: aprobado; siete rutas, enlaces internos, metadatos, fotografía, 404/noindex, sitemap, robots y restricciones de imágenes comprobados.
- Sitemap parseado como XML válido, con siete URLs únicas y completas.
- Navegador: siete rutas sin desbordamiento a 320 y 1440 px, fotografía cargada y navegación hacia Contacto funcional; enlace para saltar al contenido accesible con Tab y foco visible.
- Lighthouse nuevo de Inicio, en producción local: Desktop 100/100/100/100 y Mobile 100/100/100/100, en el orden Performance/Accessibility/Best Practices/SEO. Ejecuciones UTC `2026-11-23T03:42:35.878Z` y `2026-11-23T03:42:46.329Z`, el 22 de noviembre en Perú, sin advertencias de ejecución.
- No reutilicé las puntuaciones anteriores como nuevas: las anteriores fueron Desktop 100/100/100/100 y Mobile 98/100/100/100.
- Usé el puerto 3002 al encontrar procesos en escucha en 3000 y 3001. No terminé dichos procesos ni modifiqué puertos de Vercel.

### Estado y siguiente paso manual

Dejo el proyecto preparado para importar en Vercel, con `SITE_URL` documentada y validada. El estado es **Pendiente de despliegue manual**. La publicación, la URL definitiva, el dominio y su validación pública quedan a mi cargo. Las evidencias se presentan en el documento académico de entrega.

Como preparación final, fijé Node.js `24.x` en engines y conservé la misma versión mayor probada localmente; Vercel puede seleccionar otra mayor con un rango abierto. No agregué dependencias.
