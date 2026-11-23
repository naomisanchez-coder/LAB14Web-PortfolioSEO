import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL ?? "http://localhost:3000";
const origin = process.env.SITE_URL ?? "http://localhost:3000";
const pages = new Map([
  ["/", "Naomi Sánchez | Desarrolladora web en formación"],
  ["/projects", "Proyectos | Naomi Sánchez"],
  ["/about", "Sobre mí | Naomi Sánchez"],
  ["/projects/ecommerce-platform", "E-commerce Platform | Naomi Sánchez"],
  ["/projects/task-manager", "Task Manager App | Naomi Sánchez"],
  ["/projects/weather-dashboard", "Weather Dashboard | Naomi Sánchez"],
]);
const imageUrls = new Set();
const read = async (path, options) => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  return response;
};
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]?.replaceAll("&amp;", "&");

for (const [path, title] of pages) {
  const html = await (await read(path)).text();
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head, `${path}: head`);
  assert.equal(head.match(/<title>(.*?)<\/title>/)?.[1], title);
  const tags = [...head.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(([tag]) => tag);
  const meta = (key) => tags.find((tag) => attr(tag, "name") === key || attr(tag, "property") === key);
  const canonical = tags.find((tag) => attr(tag, "rel") === "canonical");
  const expected = new URL(path, origin).href;
  assert.equal(new URL(attr(canonical ?? "", "href")).href, expected);
  for (const key of ["description", "og:title", "og:description", "og:image", "twitter:title", "twitter:description", "twitter:image", "robots"]) {
    assert.ok(attr(meta(key) ?? "", "content"), `${path}: ${key}`);
  }
  assert.equal(new URL(attr(meta("og:url"), "content")).href, expected);
  assert.equal(attr(meta("twitter:card"), "content"), "summary_large_image");
  assert.match(attr(meta("robots"), "content"), /index, follow/);
  assert.match(html, /<html[^>]*lang="es"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: un h1`);
  assert.match(html, /<main[^>]*id="main-content"/);
  assert.match(html, /<header\b/);
  assert.match(html, /<footer\b/);
  for (const href of ["/", "/projects", "/about", "https://github.com/naomisanchez-coder"]) {
    assert.ok(html.includes(`href="${href}"`), `${path}: enlace ${href}`);
  }
  assert.doesNotMatch(html, /href="(?:https:\/\/(?:demo|tasks)\.example\.com|https:\/\/github\.com\/usuario|\/contact)/);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.ok(attr(tag, "alt")?.trim(), `${path}: alt descriptivo`);
    assert.ok(attr(tag, "sizes"), `${path}: sizes`);
    assert.match(attr(tag, "src"), /^\/_next\/image\?/);
    imageUrls.add(attr(tag, "src"));
  }
  console.log(`OK ${path}: HTTP, SEO, semántica, navegación, footer y alt`);
}

const missing = await fetch(`${base}/projects/proyecto-inexistente`);
assert.equal(missing.status, 404);
assert.match(await missing.text(), /noindex/);
console.log("OK slug inexistente: HTTP 404 y noindex");

const sitemap = await (await read("/sitemap.xml")).text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url).sort();
assert.deepEqual(locations, [...pages.keys()].map((path) => new URL(path, origin).href).sort());
assert.equal([...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].length, 6);
for (const [, date] of sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)) assert.ok(Date.parse(date) <= Date.now());
assert.equal([...sitemap.matchAll(/<changefreq>/g)].length, 6);
assert.equal([...sitemap.matchAll(/<priority>/g)].length, 6);
const robots = await (await read("/robots.txt")).text();
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /User-Agent: Googlebot/i);
assert.match(robots, /Allow: \//);
assert.match(robots, /Disallow: \/api\//);
assert.match(robots, /Disallow: \/admin\//);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.doesNotMatch(robots, /Disallow: \/(?:_next|images|projects|about)/);
console.log("OK sitemap (6 URLs) y robots (recursos públicos rastreables)");

for (const url of imageUrls) {
  const response = await read(url, { headers: { Accept: "image/webp" } });
  assert.match(response.headers.get("content-type"), /image\/webp/);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
}
const avif = await read("/_next/image?url=%2Fimages%2Ffoto-perfil.png&w=384&q=75", { headers: { Accept: "image/avif" } });
assert.match(avif.headers.get("content-type"), /image\/avif/);
const blocked = await fetch(`${base}/_next/image?url=https%3A%2F%2Fexample.com%2Fnot-allowed.jpg&w=640&q=75`);
assert.equal(blocked.status, 400);
console.log(`OK ${imageUrls.size} imágenes optimizadas WebP, fotografía AVIF y dominio ajeno rechazado`);
console.log("Verificación SEO completada sin errores.");
