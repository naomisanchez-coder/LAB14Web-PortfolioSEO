# Laboratorio 14 — Portafolio personal optimizado

**Curso:** Desarrollo de Aplicaciones Web Avanzado

**Estudiante:** Naomi Sánchez

**Repositorio:** [LAB14Web-PortfolioSEO](https://github.com/naomisanchez-coder/LAB14Web-PortfolioSEO)

Soy estudiante de Desarrollo de Software y desarrolladora web en formación. En este laboratorio construyo un portafolio con Next.js para practicar metadatos dinámicos, optimización de imágenes, accesibilidad y SEO técnico. Sigo como referencia la guía `GLAB-S14-EAREVALO-2026-1.docx` del docente Edwin William Arévalo Sermeño y adapto sus ejemplos a macOS y a las APIs instaladas.

Completé la primera etapa, partes 1 a 6, y continué la TAREA sobre el mismo repositorio y la rama `main`. Incorporé mi fotografía original, mejoré el diseño e implementé Contacto. Dejé el proyecto preparado para Vercel; **no he desplegado ni configurado un dominio**.

## Tecnologías y versiones verificadas

| Herramienta | Versión |
| --- | --- |
| Node.js | 24.21.0 |
| npm | 11.19.0 |
| Git | 2.50.1 (Apple Git-155) |
| GitHub CLI | 2.104.0 |
| Next.js | 16.4.6 |
| React / React DOM | 19.3.0 |
| TypeScript | 5.9.3 |
| Tailwind CSS / @tailwindcss/turbopack | 4.3.3 |
| ESLint / eslint-config-next | 9.39.5 / 16.4.6 |
| Lighthouse de auditoría | 13.6.0 |

Uso App Router, Metadata API, Turbopack, `next/image`, TypeScript estricto y el alias `@/*` hacia `src/*`. Node.js cumple el requisito de Next.js `>=20.9.0`. Conservo las dependencias existentes y sus versiones resueltas en `package-lock.json`; no añadí librerías de componentes, mensajería ni animación. ESLint 9 procede del generador original y mantiene su aviso de fin de soporte; las comprobaciones del código pasan.

## Primera etapa — partes 1 a 6

- Definí interfaces tipadas para proyectos, metadatos e información personal.
- Implementé meta tags globales y específicos con títulos, plantilla, descripción, keywords, authors, canonical, Open Graph, Twitter y robots.
- Construí Inicio, Proyectos, los tres detalles dinámicos y Sobre mí.
- Compartí Header, Footer y ProjectCard, con navegación adaptable y página activa.
- Optimicé imágenes con AVIF/WebP, tamaños responsive, proporciones estables y lazy loading secundario.
- Generé el sitemap desde las rutas y los datos de proyectos, y robots.txt mediante las APIs nativas.
- Verifiqué compilación, rutas, metadatos y Lighthouse Desktop/Mobile.

Conservo los slugs `ecommerce-platform`, `task-manager` y `weather-dashboard`. Son ejemplos académicos de la guía; no afirmo haber desarrollado las aplicaciones completas descritas. Mantengo sus tecnologías y los dos primeros destacados. No publico demos ficticias, repositorios inventados, experiencia laboral ni certificaciones.

## Tecnologías y versiones verificadas

| Tecnología o herramienta | Versión instalada |
| --- | --- |
| Node.js | 24.21.0 |
| npm | 11.19.0 |
| Git | 2.50.1 (Apple Git-155) |
| GitHub CLI | 2.104.0 |
| Next.js | 16.4.6 |
| React / React DOM | 19.3.0 |
| TypeScript | 5.9.3 |
| Tailwind CSS / @tailwindcss/turbopack | 4.3.3 |
| ESLint / eslint-config-next | 9.39.5 / 16.4.6 |
| Lighthouse | 13.6.0, herramienta temporal de auditoría |

Mantengo App Router, Turbopack, Metadata API, next/image y el alias `@/*` hacia `src/*`. No instalé dependencias nuevas. Conservo el lockfile y fijo `engines.node` en `24.x` para que Vercel use la misma versión mayor que validé localmente, evitando que un rango abierto seleccione otra mayor automáticamente. Next.js requiere como mínimo Node.js 20.9.0; mi versión cumple ese requisito. ESLint procede de la configuración existente del laboratorio.

## TAREA — ampliación final

### Fotografía profesional

Copié mi fotografía original `FotoFormal.png` a `public/images/foto-perfil.png`. El archivo conserva exactamente los mismos bytes y sus dimensiones originales, **1254 × 1254 px**. No alteré rasgos, colores ni píxeles y no utilicé servicios externos de procesamiento.

Reutilizo la misma ruta en Inicio y Sobre mí, mediante el campo existente `personalInfo.avatar`. Configuro textos alternativos, dimensiones y `sizes`. Mantengo la proporción cuadrada, bordes suaves y un marco discreto sin inclinación ni animaciones del rostro. `next/image` sirve versiones optimizadas WebP/AVIF, sin duplicar la fotografía en el repositorio. La carga inmediata y prioridad alta se reservan para la imagen principal de Inicio; Sobre mí conserva carga diferida. El avatar antiguo permanece como recurso histórico sin uso en las páginas.

### Diseño y navegación

Distribuí blanco cálido, azul suave y gris claro entre superficies y secciones, con violeta en los acentos. Mejoré jerarquía tipográfica, separación de secciones, tarjetas, etiquetas, botones y pie de página. Mantengo contraste, foco visible, enlace para saltar al contenido y respeto a `prefers-reduced-motion`.

La portada incluye botones a Proyectos y Contacto. Header y Footer enlazan a Contacto; el Header identifica la ruta activa y se organiza en dos columnas en móviles pequeños. Conservo el enlace a Sobre mí y todas las rutas anteriores. Describo mi interés y experiencia académica en desarrollo web y aplicaciones móviles sin inventar tecnologías móviles concretas ni experiencia profesional.

### Contacto

Agregué `/contact` con presentación, invitación a propuestas o consultas, enlace a mi [GitHub real](https://github.com/naomisanchez-coder) y regreso al inicio. El texto remite a los canales públicos disponibles en ese perfil; no promete mensajería privada de GitHub.

No he confirmado correo o LinkedIn, por lo que no los muestro. No implemento formulario, backend, base de datos, servicios de correo ni claves API. Contacto tiene title, description, canonical, Open Graph y Twitter propios, reutilizando `pageMetadata`.

### Sitemap y robots

Mi sitemap contiene **siete URLs públicas**, sin duplicados. Los detalles se siguen generando desde `projects`. Uso `lastModified` con la fecha real de preparación del contenido, conservada en `contentLastModified`; la actualizaré cuando modifique el contenido. No invento fechas históricas ni cambio la fecha por cada petición.

Revisé robots.txt y conservé las reglas generales y de Googlebot: permito `/`, incluida `/contact`, y restrinjo `/api/` y `/admin/`. No bloqueo `/_next/` ni imágenes públicas. Esas restricciones son reglas de rastreo, no autenticación. La referencia al sitemap utiliza el mismo origen central de los metadatos.

## Estructura actual

```text
LAB14Web-PortfolioSEO/
├── .gitignore
├── AGENTS.md
├── README.md
├── prompts.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── docs/lighthouse/
│   ├── desktop.json             # informe de la primera etapa
│   └── mobile.json              # informe de la primera etapa
├── public/images/
│   ├── avatar.png               # recurso anterior, sin uso en páginas
│   ├── foto-perfil.png          # mi fotografía original
│   └── og-portfolio.png
├── scripts/
│   ├── verify-seo.mjs
│   └── verify-site-config.mjs
└── src/
    ├── app/
    │   ├── about/page.tsx
    │   ├── contact/page.tsx
    │   ├── projects/
    │   │   ├── page.tsx
    │   │   └── [slug]/page.tsx
    │   ├── globals.css
    │   ├── icon.png
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   ├── page.tsx
    │   ├── robots.ts
    │   └── sitemap.ts
    ├── components/
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   └── ProjectCard.tsx
    ├── lib/
    │   ├── data.ts
    │   ├── metadata.ts
    │   └── site.ts
    └── types/index.ts
```

`node_modules`, `.next`, `next-env.d.ts` y archivos incrementales de TypeScript se generan localmente y están ignorados. No he creado carpetas de evidencias ni capturas.

## Instalación y ejecución local

```bash
git clone https://github.com/naomisanchez-coder/LAB14Web-PortfolioSEO.git
cd LAB14Web-PortfolioSEO
npm install
npm run dev
```

Para una instalación reproducible con el lockfile también puedo usar `npm ci`. Desarrollo usa por defecto [http://localhost:3000](http://localhost:3000). Mi carpeta original es `/Users/naomisanchez/Documents/LAB14-Web-Avanzado/LAB14Web-PortfolioSEO`.

Para compilar y ejecutar producción local en el puerto predeterminado:

```bash
npm run build
npm run start
```

### Alternativa si el puerto 3000 está ocupado

El error `EADDRINUSE` indica que otro proceso ya escucha en ese puerto. Reviso los puertos, sin finalizar procesos de otros proyectos:

```bash
lsof -iTCP:3000 -iTCP:3001 -sTCP:LISTEN -n -P
```

Si 3001 está libre, configuro el origen local antes de compilar para que canonical y sitemap coincidan con la prueba:

```bash
SITE_URL=http://localhost:3001 npm run build
SITE_URL=http://localhost:3001 npm run start -- -p 3001
```

En otra terminal verifico esa misma compilación:

```bash
TEST_BASE_URL=http://localhost:3001 SITE_URL=http://localhost:3001 npm run verify:seo
```

En esta ampliación encontré procesos escuchando en 3000 y 3001; validé en **3002** con los mismos comandos sustituyendo el puerto por 3002. No ejecuté `kill`, `sudo` ni cambios en los procesos ajenos. Un puerto de prueba local no es mi URL pública. Para volver al puerto 3000, reconstruyo sin el override local antes de arrancar.

## SEO y origen público para Vercel

Reutilizo **`SITE_URL`** como variable del origen público. No es una clave secreta. No necesito duplicarla como `NEXT_PUBLIC_SITE_URL`, porque los metadatos se construyen en el servidor.

La resolución en `src/lib/site.ts` sigue este orden:

1. Uso `SITE_URL`, si la he configurado.
2. En Vercel, puedo utilizar su variable real `VERCEL_PROJECT_PRODUCTION_URL`, añadiendo HTTPS.
3. Fuera de Vercel, mantengo `http://localhost:3000` como fallback de desarrollo.

Valido que el origen no incluya ruta, query, fragmento ni credenciales. Cuando `VERCEL=1`, rechazo localhost, direcciones locales conocidas, HTTP y puertos explícitos. Si no existe un origen público disponible, la compilación falla con una indicación de configuración. Así evito publicar el puerto 3001 o 3002 como canonical.

Centralizo ese origen en metadataBase, canonical, Open Graph, sitemap y robots. Las imágenes Open Graph generales siguen usando el recurso existente del portafolio; los proyectos conservan sus imágenes ilustrativas. No configuro verification sin un código real. No expongo variables privadas al navegador.

### Preparación para mi despliegue manual

**Estado: Pendiente de despliegue manual.**

| Dato | Estado actual |
| --- | --- |
| URL de Vercel | Pendiente de despliegue manual |
| Dominio personalizado | Pendiente de configuración y validación manual, si decido configurarlo |
| Comprobación SEO pública | Pendiente, después del despliegue |

Cuando realice la importación manual en Vercel:

1. Seleccionaré el repositorio y la rama `main`, con la raíz del repositorio como Root Directory.
2. Usaré el preset Next.js, Node.js **24.x**, instalación con el lockfile y el comando de build `npm run build`. Mantendré la salida predeterminada del framework y el puerto gestionado por Vercel. No necesito `vercel.json` ni ejecutar `next start -p 3001` en la plataforma.
3. Mantendré habilitado el acceso a las variables de sistema si utilizo `VERCEL_PROJECT_PRODUCTION_URL`.
4. Cuando Vercel me asigne su dirección real, copiaré el origen HTTPS completo en `SITE_URL` para Production, sin ruta adicional, y volveré a compilar mediante un redeploy manual. No copiaré el origen local de las pruebas. Puedo usar la variable automática de producción mientras aún no establezca el override.
5. Tras publicar, revisaré los siete canonical, Open Graph, sitemap, robots y las imágenes con la URL real. Si más adelante asocio un dominio, actualizaré `SITE_URL`, reconstruiré y repetiré esa revisión.

Esta preparación está basada en la [documentación oficial de Next.js en Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), sus [variables de sistema](https://vercel.com/docs/environment-variables/system-environment-variables) y las [versiones de Node.js compatibles](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions). No he iniciado sesión, creado proyectos, desplegado, comprado dominios, modificado DNS ni activado servicios externos.

## Rutas disponibles

Uso el origen del puerto activo delante de cada ruta:

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación, fotografía y dos proyectos destacados |
| `/about` | Formación, fotografía y habilidades |
| `/projects` | Los tres ejemplos académicos |
| `/contact` | Presentación y canal público real |
| `/projects/ecommerce-platform` | Detalle y metadatos específicos |
| `/projects/task-manager` | Detalle y metadatos específicos |
| `/projects/weather-dashboard` | Detalle y metadatos específicos |
| `/sitemap.xml` | XML con siete URLs completas |
| `/robots.txt` | Reglas generales, Googlebot y sitemap |
| `/projects/proyecto-inexistente` | HTTP 404 y noindex |

## Validaciones realizadas

Ejecuté estas comprobaciones sobre la continuación del proyecto:

| Verificación | Resultado |
| --- | --- |
| `npm run lint` | Aprobado |
| `npx tsc --noEmit` | Aprobado |
| `npm run build` | Aprobado; Contacto y los tres detalles se prerenderizan |
| `npm run verify:seo` con origen/puerto 3002 | Aprobado |
| Siete páginas y enlaces internos | HTTP 200, sin destinos internos rotos detectados |
| URL incorrecta de proyecto | HTTP 404 y noindex |
| Metadatos de todas las páginas | Title, description, canonical, Open Graph, Twitter y robots comprobados en HTML |
| Sitemap | XML válido, siete URLs completas, únicas y accesibles |
| Robots | Contacto y recursos públicos rastreables; sitemap coherente con el origen |
| Fotografía | Archivo idéntico al original, cargado en navegador y servido en WebP y AVIF |
| Dominio ajeno de imágenes | Rechazado con HTTP 400 |
| Origen público | Pruebas de fallback real de Vercel y rechazo de configuraciones inválidas |
| Responsive | Siete rutas a 320 y 1440 px sin desbordamiento horizontal; Inicio y Contacto también revisados a 390 px |
| Teclado y navegación | Enlace de salto accesible con Tab y foco visible; Contacto activo y accesible desde Inicio |

El verificador conserva las comprobaciones originales y agrega Contacto, la fotografía, los destinos internos y las pruebas de origen. Puedo ejecutarlas contra la URL pública real después de desplegar, indicando `TEST_BASE_URL` y `SITE_URL` con ese origen. Las comprobaciones XML y de responsive se realizaron adicionalmente durante la revisión.

### Lighthouse — mediciones anteriores y nuevas

Todas las mediciones siguientes corresponden a **Inicio `/` en producción local**, con Lighthouse 13.6.0 y Chrome headless. No representan una auditoría individual de todas las rutas ni una medición de Vercel.

| Etapa / modo | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Primera etapa / Desktop | 100 | 100 | 100 | 100 |
| Primera etapa / Mobile | 98 | 100 | 100 | 100 |
| TAREA / Desktop | 100 | 100 | 100 | 100 |
| TAREA / Mobile | 100 | 100 | 100 | 100 |

Conservo sin sobrescribir los informes históricos de la primera etapa: [Desktop](docs/lighthouse/desktop.json) y [Mobile](docs/lighthouse/mobile.json), ejecutados el 22 de noviembre de 2026 en Perú.

Ejecuté las nuevas auditorías de la TAREA en `http://localhost:3002/`, a las marcas UTC `2026-11-23T03:42:35.878Z` y `2026-11-23T03:42:46.329Z`, correspondientes al **22 de noviembre de 2026 en Perú**. No hubo advertencias de ejecución. Los informes nuevos se procesaron temporalmente fuera del repositorio, con las auditorías de capturas desactivadas; registré los resultados reales aquí sin agregar capturas ni archivos pesados. La fotografía y el rediseño superaron el objetivo académico de 90 en esta medición. Los resultados pueden variar según el equipo, las cachés y la red.

## Git, seguridad e incidencias

Conservé los 12 commits originales y continué exclusivamente en `main`, con commits funcionales y documentales publicados progresivamente. No realicé force push, cambios de historial ni modificaciones en otros repositorios.

```bash
git log --oneline --reverse
git fetch origin
git rev-list --left-right --count main...origin/main
git status --short --branch
```

La sincronización final debe mostrar `0 0` y el árbol limpio. `.gitignore` excluye dependencias, `.next`, `.env.local`, credenciales, cachés y logs. No añadí configuración externa de Vercel ni secretos.

Conservo como incidencias de la primera etapa la caché de npm sin permisos, resuelta con una caché temporal, y el error de cierre del generador, resuelto inspeccionando y validando la instalación. En esta etapa atendí el conflicto de puertos usando uno libre y adaptando las variables de verificación. Si necesito la caché alternativa, puedo ejecutar `npm install --cache /private/tmp/lab14-npm-cache`, sin cambiar permisos globales.

## Evidencias académicas

Presento las evidencias del laboratorio en el documento académico de entrega. No creo carpetas de evidencias, screenshots o capturas ni duplico esas imágenes en el repositorio. Mi fotografía en `public/images/` es un recurso funcional de la aplicación.

## Cinco conclusiones técnicas

1. Aprendí a reutilizar la Metadata API y el origen central para mantener coherentes canonical, Open Graph, sitemap y robots en siete páginas.
2. Comprobé que puedo integrar mi fotografía original sin editarla y servir tamaños y formatos modernos mediante `next/image`, manteniendo el rendimiento medido por Lighthouse.
3. Mejoré la separación visual y la navegación responsive conservando las rutas, los datos académicos y los componentes existentes, sin añadir dependencias de interfaz.
4. Verifiqué que una página de contacto con un enlace público real satisface el alcance solicitado sin simular envíos ni añadir un backend innecesario.
5. Separé la preparación técnica del despliegue: validé producción local y configuraciones públicas, preservé el historial Git y dejé la publicación y el dominio para mi revisión manual.
