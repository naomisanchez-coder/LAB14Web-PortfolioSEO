// Origen local de desarrollo. Sustituir por un origen público real en la TAREA.
const configuredUrl = process.env.SITE_URL ?? "http://localhost:3000";
const url = new URL(configuredUrl);
if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
  throw new Error("SITE_URL debe ser un origen HTTP(S), sin credenciales, ruta, query ni fragmento.");
}
export const siteUrl = url.origin;
