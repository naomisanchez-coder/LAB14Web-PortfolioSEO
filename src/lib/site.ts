// SITE_URL es un dato público de SEO, utilizado solo desde componentes servidor.
// En Vercel reutilizamos su dominio de producción real cuando aún no hay override.
const onVercel = process.env.VERCEL === "1";
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl = process.env.SITE_URL?.trim()
  || (onVercel && productionHost ? `https://${productionHost}` : undefined);

if (onVercel && !configuredUrl) {
  throw new Error("Configura SITE_URL con la URL HTTPS pública real de Vercel antes de compilar.");
}

const url = new URL(configuredUrl ?? "http://localhost:3000");
if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
  throw new Error("SITE_URL debe ser un origen HTTP(S), sin credenciales, ruta, query ni fragmento.");
}

const localHost = /^(localhost|.+\.localhost|0\.0\.0\.0|127\..*|10\..*|192\.168\..*|172\.(1[6-9]|2\d|3[01])\..*|\[::1\])$/i.test(url.hostname);
if (onVercel && (url.protocol !== "https:" || localHost || url.port)) {
  throw new Error("En Vercel SITE_URL debe ser HTTPS pública, sin localhost ni puertos locales.");
}

export const siteUrl = url.origin;
