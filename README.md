# LAB14Web-PortfolioSEO

Soy Naomi Sánchez, estudiante de Desarrollo de Software y desarrolladora web en formación. En este laboratorio implemento un portafolio personal para practicar optimización de recursos y posicionamiento SEO con Next.js. Completo la **primera etapa, partes 1 a 6**, de la guía `GLAB-S14-EAREVALO-2026-1.docx` del docente Edwin William Arévalo Sermeño. Adapto los ejemplos a macOS y a las APIs de la versión instalada.

Trabajo en la rama `main` del [repositorio público](https://github.com/naomisanchez-coder/LAB14Web-PortfolioSEO). No he implementado contacto, desplegado en Vercel ni configurado un dominio. Esos puntos corresponden a la segunda etapa, **TAREA**.

## Tecnologías y versiones verificadas

| Herramienta | Versión utilizada |
| --- | --- |
| Node.js | 24.21.0 |
| npm | 11.19.0 |
| Git | 2.50.1 (Apple Git-155) |
| GitHub CLI | 2.104.0 |
| Next.js | 16.4.6, estable consultada en npm |
| React / React DOM | 19.3.0 |
| TypeScript | 5.9.3 |
| Tailwind CSS / @tailwindcss/turbopack | 4.3.3 |
| ESLint | 9.39.5 |
| eslint-config-next | 16.4.6 |
| Lighthouse | 13.6.0 (herramienta de auditoría temporal) |
| Chrome de auditoría | HeadlessChrome 158.0.0.0 |

Verifiqué que Next.js 16.4.6 requiere Node.js `>=20.9.0` y que mi Node instalado cumple ese rango. Uso TypeScript, App Router, Turbopack, Tailwind CSS, ESLint y el alias `@/*` hacia `src/*`. Conservo las versiones resueltas en `package-lock.json`. La versión de ESLint procede del generador de Next.js; npm mostró un aviso de fin de soporte de ESLint 9, sin errores de lint ni vulnerabilidades en la instalación comprobada.

## Instalación y ejecución

```bash
git clone https://github.com/naomisanchez-coder/LAB14Web-PortfolioSEO.git
cd LAB14Web-PortfolioSEO
npm ci
npm run dev
```

Abro [http://localhost:3000](http://localhost:3000). Para evaluar rendimiento uso producción en lugar del servidor de desarrollo:

```bash
npm run build
npm run start
```

Detengo el servidor anterior con `Ctrl+C` antes de iniciar otro en el puerto 3000.

Mi carpeta de trabajo original es:

```text
/Users/naomisanchez/Documents/LAB14-Web-Avanzado/LAB14Web-PortfolioSEO
```

### Origen y datos personales

Uso `http://localhost:3000` como origen de desarrollo. Puedo configurarlo mediante `SITE_URL` en un archivo `.env.local` ignorado por Git o en el entorno del proceso:

```bash
SITE_URL=http://localhost:3000 npm run dev
```

`src/lib/site.ts` valida que sea un origen HTTP(S) sin ruta, query, fragmento ni credenciales. En producción estática, los metadatos, robots y sitemap se resuelven al compilar: cuando disponga de una URL pública real, configuraré `SITE_URL` antes de `npm run build` y reconstruiré. Aún no he seleccionado ni publicado un dominio.

Solo publico mi nombre, perfil académico y [GitHub](https://github.com/naomisanchez-coder). Dejo correo y LinkedIn sin configurar; el Footer solo los renderiza si existen. No añado códigos de verificación de buscadores ficticios.

## Estructura del proyecto

```text
LAB14Web-PortfolioSEO/
├── .gitignore
├── AGENTS.md
├── README.md
├── prompts.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts                 # generado por Next.js, ignorado
├── package.json
├── package-lock.json
├── tsconfig.json
├── docs/
│   └── lighthouse/
│       ├── desktop.json
│       └── mobile.json
├── public/
│   └── images/
│       ├── avatar.png
│       └── og-portfolio.png
├── scripts/
│   └── verify-seo.mjs
└── src/
    ├── app/
    │   ├── about/page.tsx
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

## Partes desarrolladas

1. **Meta tags dinámicos.** Defino interfaces de proyectos, metadatos e información personal. Conservo los tres ejemplos y slugs de la guía. Implemento metadata global, inicio, listado y detalle con `generateStaticParams()`, `generateMetadata()`, `params` asíncronos y `notFound()` para slugs inexistentes.
2. **Componentes compartidos.** Integro Header y Footer en el layout. Incluyo navegación funcional con estado de página actual, acceso a GitHub y año actual al renderizar. En una compilación estática, el año se actualiza al reconstruir.
3. **Imágenes y lazy loading.** Uso `next/image`, `sizes`, dimensiones o relaciones de aspecto y alt descriptivos. Creo tarjetas reutilizables y una página Sobre mí con información académica verídica.
4. **Sitemap dinámico.** Genero las seis URLs desde las páginas estáticas y el arreglo de proyectos, con prioridades y frecuencias razonables.
5. **Robots.txt.** Permito rastreo público, restrinjo `/api/` y `/admin/` según el modelo académico y añado reglas explícitas para Googlebot y referencia al sitemap.
6. **Verificación SEO.** Ejecuto lint, TypeScript, build, comprobaciones HTTP y Lighthouse Desktop/Mobile. Dejo la aplicación lista para mis capturas manuales en Chrome.

### Proyectos académicos

Presento **E-commerce Platform**, **Task Manager App** y **Weather Dashboard** exclusivamente como ejemplos del documento. Los dos primeros son destacados. Las tecnologías son las indicadas en la guía, no integraciones instaladas o aplicaciones que afirme haber desarrollado. No incorporo las URLs `example.com` ni repositorios del usuario ficticio del docente.

Uso un avatar local con mis iniciales NS, identificado como ilustración de desarrollo, porque no proporcioné una fotografía personal. Las tres fotografías de proyectos son imágenes ilustrativas de Unsplash tomadas de las referencias de la guía, no capturas de aplicaciones propias. Mi imagen social y el icono también son recursos locales.

## SEO implementado

- Uso la Metadata API nativa de Next.js, `metadataBase`, título predeterminado y plantilla `%s | Naomi Sánchez`.
- Defino description, keywords y authors; cada página y detalle tiene canonical, Open Graph y Twitter Card `summary_large_image`.
- Configuro robots de metadatos con `index, follow` y vista previa grande para Googlebot. Las páginas inexistentes responden 404 e incluyen `noindex`.
- Mantengo `lang="es"`, un `h1` por página, regiones semánticas, jerarquía de títulos, navegación y textos alternativos descriptivos.
- Agrego un enlace para saltar al contenido, foco visible, contraste legible y respeto a `prefers-reduced-motion`.
- Centralizo el origen para que canonical, Open Graph, sitemap y robots sean consistentes.
- No incluyo verification sin un código real. Un localhost rastreable en el ejercicio no constituye publicación ni indexación pública.

El sitemap usa `contentLastModified` en `src/lib/data.ts`, registrado al preparar realmente el contenido del laboratorio. No uso fechas históricas inventadas ni cambio `lastModified` en cada petición; actualizaré ese valor cuando edite el contenido.

Adapto robots respecto a la captura del docente para **no bloquear `/_next/`**, porque allí se sirven CSS, JavaScript e imágenes optimizadas. Tampoco bloqueo `/images/`, `/about` ni `/projects`. Las restricciones de rastreo no son un mecanismo de autenticación; `/api/` y `/admin/` no son funcionalidades implementadas en esta etapa.

## Optimización de imágenes y diseño

Configuro AVIF y WebP, resoluciones de dispositivo entre 640 y 1920 px y tamaños pequeños para imágenes locales. `remotePatterns` permite exclusivamente HTTPS en `images.unsplash.com`, las tres rutas de fotografías y sus parámetros exactos; no uso comodines de subdominios.

Las tarjetas usan `loading="lazy"` y una proporción 16:10. Sobre mí también difiere la imagen. El avatar principal usa `loading="eager"` y `fetchPriority="high"`, reservado para ese recurso crítico; la imagen del detalle se carga de inmediato por estar al inicio de su página. No uso la propiedad `priority`, obsoleta en Next.js 16.

El diseño es claro con acentos violeta y azul, tarjetas con bordes suaves y transiciones discretas. Uso fuentes del sistema, sin dependencias de animación ni descargas de Google Fonts. Las páginas se generan estáticamente; el Header es un componente cliente pequeño para detectar la ruta activa.

## Rutas disponibles

| Ruta local | Funcionalidad comprobada |
| --- | --- |
| [Inicio](http://localhost:3000/) | Presentación, avatar y dos proyectos destacados |
| [Proyectos](http://localhost:3000/projects) | Listado completo de tres ejemplos |
| [E-commerce](http://localhost:3000/projects/ecommerce-platform) | Detalle y SEO específico |
| [Task Manager](http://localhost:3000/projects/task-manager) | Detalle y SEO específico |
| [Weather Dashboard](http://localhost:3000/projects/weather-dashboard) | Detalle y SEO específico |
| [Sobre mí](http://localhost:3000/about) | Formación y habilidades |
| [Sitemap](http://localhost:3000/sitemap.xml) | XML con seis URLs |
| [Robots](http://localhost:3000/robots.txt) | Reglas y referencia al sitemap |
| [Slug inexistente](http://localhost:3000/projects/proyecto-inexistente) | Página 404 y noindex |

## Comprobaciones efectuadas

Realicé las validaciones el **22 de noviembre de 2026, hora de Perú**.

| Comprobación | Resultado real |
| --- | --- |
| `npm run lint` | Aprobado, sin errores ni advertencias de código |
| `npx tsc --noEmit` | Aprobado, sin errores de tipos |
| `npm run build` | Aprobado con Turbopack; las tres rutas de detalle se prerenderizan |
| `npm run verify:seo` | Aprobado contra el servidor de producción local |
| Inicio, proyectos, detalles y Sobre mí | HTTP 200 en las seis páginas |
| Slug inexistente | HTTP 404 y noindex |
| Titles, descriptions, canonical, Open Graph y Twitter | Presentes y específicos en el HTML recibido |
| Header, Footer y navegación | Enlaces revisados por HTTP y navegación Inicio/Proyectos/Sobre mí probada en navegador |
| Imágenes | Cuatro recursos únicos optimizados en WebP; avatar también comprobado en AVIF |
| Seguridad de imágenes | Dominio no autorizado rechazado con HTTP 400 |
| Sitemap y robots | HTTP 200, seis URLs y recursos públicos rastreables |
| Adaptación visual | Revisada en navegador a 390 y 1440 px, sin desbordamiento horizontal observado |
| Instalación de dependencias | npm informó 0 vulnerabilidades en el árbol instalado |

Para repetir el script, primero dejo `npm run start` activo en otra terminal y ejecuto:

```bash
npm run verify:seo
```

Para otro puerto puedo indicar `TEST_BASE_URL` al script. Si cambio el origen de metadatos, uso también `SITE_URL` al compilar y al verificar.

### Auditorías Lighthouse reales

Audité **la página de inicio `/`** sobre `npm run build` + `npm run start`, con Lighthouse 13.6.0 y Chrome headless, sin extensiones. Los resultados no representan una auditoría individual de todas las demás rutas ni un despliegue público.

| Modo | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 98 | 100 | 100 | 100 |

Conservo los informes originales en [Desktop](docs/lighthouse/desktop.json) y [Mobile](docs/lighthouse/mobile.json). Sus marcas UTC son `2026-11-23T02:12:01.522Z` y `2026-11-23T02:12:12.362Z`, respectivamente: corresponden al 22 de noviembre en Perú. No hubo advertencias de ejecución en los informes finales. Las puntuaciones pueden cambiar con la red, la carga del equipo y el estado de las cachés.

Para mis evidencias, abriré Chrome DevTools → Lighthouse, seleccionaré Navigation y ejecutaré Desktop y Mobile con Performance, Accessibility, Best Practices y SEO. Mantendré la URL local, usaré producción y capturaré mis propios resultados. Las capturas manuales todavía están pendientes.

## Incidencias resueltas

- La caché habitual de npm no permitía escritura en el entorno. Usé una caché temporal `/private/tmp/lab14-npm-cache` sin cambiar permisos globales ni otros proyectos. Si necesito repetirlo: `npm ci --cache /private/tmp/lab14-npm-cache`.
- `create-next-app` informó `RangeError: Maximum call stack size exceeded` al cerrar, después de instalar las dependencias y generar los archivos. Inspeccioné la estructura y validé lint, tipos y build; inicialicé Git explícitamente en `main` y conecté el remoto vacío.
- La primera comprobación canonical trataba como distintos el origen con y sin barra final. Normalicé ambas URLs en el verificador; son equivalentes en la raíz.
- Lighthouse no pudo iniciar Chrome en el entorno restringido en el primer intento. Ejecuté la auditoría con acceso autorizado y perfiles temporales, sin modificar mi perfil habitual de Chrome.
- La auditoría inicial de escritorio dio 94/100/100/100 y señaló oportunidades sobre el nombre accesible de la marca y la prioridad del avatar. Corregí ambas y también la jerarquía de títulos de las tarjetas antes de las auditorías finales.

## Historial de trabajo y protección del repositorio

Validé cada etapa antes de crear su commit y publiqué progresivamente en `origin/main`, sin commits vacíos ni force push. Puedo revisar los hashes y mensajes reales con:

```bash
git log --oneline --reverse
git fetch origin
git rev-list --left-right --count main...origin/main
git status --short --branch
```

Espero `0 0` en el conteo de divergencia. Excluyo `node_modules`, `.next`, `.env.local`, credenciales, logs y archivos de compilación de TypeScript mediante `.gitignore`. Los JSON de Lighthouse son informes de verificación intencionalmente versionados, no archivos temporales del servidor.

## Espacio para mis evidencias manuales

Todavía no he agregado capturas. Completaré estas casillas con imágenes reales tomadas por mí:

- [ ] Versiones de Node.js, npm y Git en Terminal.
- [ ] Inicio completo en Desktop, con proyectos destacados y Footer.
- [ ] Listado completo de proyectos.
- [ ] Detalle de E-commerce Platform.
- [ ] Detalle de Task Manager App.
- [ ] Detalle de Weather Dashboard.
- [ ] Sobre mí.
- [ ] Navegación y diseño móvil en Chrome DevTools.
- [ ] `sitemap.xml` con las seis URLs.
- [ ] `robots.txt` con reglas y sitemap.
- [ ] `<head>` del inicio y de un detalle: title, description, canonical, Open Graph y Twitter.
- [ ] Slug inexistente y página 404; estado HTTP en Network.
- [ ] Terminal con lint, TypeScript, build y `verify:seo` aprobados.
- [ ] Lighthouse Desktop, cuatro categorías.
- [ ] Lighthouse Mobile, cuatro categorías.
- [ ] Historial de commits y sincronización de `main` con `origin/main` en GitHub.

## Estado de la primera etapa y siguiente TAREA

Tengo implementadas y verificadas las partes 1 a 6, con documentación y reportes reales de Lighthouse. Dejo pendiente únicamente la incorporación manual de mis capturas como evidencia de esta etapa.

Para la **TAREA** quedan la página de contacto, la actualización correspondiente de sitemap y robots, el despliegue en Vercel y la configuración/asociación de un dominio público real. No he realizado esas acciones en este laboratorio inicial.

## Referencias

- Guía académica proporcionada: `GLAB-S14-EAREVALO-2026-1.docx`, partes 1 a 6 y sus capturas de código.
- [Instalación y requisitos oficiales de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- Documentación incluida con Next.js instalado en `node_modules/next/dist/docs/`, consultada para Metadata API, imágenes, rutas dinámicas, sitemap y robots.
