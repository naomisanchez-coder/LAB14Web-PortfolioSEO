import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

// example.com es un dominio reservado solo para estas pruebas aisladas; nunca se guarda como configuración.
const check = (values, expected, failure = false) => {
  const env = { ...process.env };
  for (const key of ["SITE_URL", "VERCEL", "VERCEL_PROJECT_PRODUCTION_URL"]) delete env[key];
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", "import { siteUrl } from './src/lib/site.ts'; console.log(siteUrl)"], { env: { ...env, ...values }, encoding: "utf8" });
  if (failure) {
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /SITE_URL/);
  } else {
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), expected);
  }
};
check({}, "http://localhost:3000");
check({ SITE_URL: "http://localhost:3001" }, "http://localhost:3001");
check({ VERCEL: "1", VERCEL_PROJECT_PRODUCTION_URL: "example.com" }, "https://example.com");
check({ VERCEL: "1", SITE_URL: "https://example.com" }, "https://example.com");
for (const site of ["http://localhost:3001", "https://localhost", "https://127.0.0.1", "http://example.com", "https://example.com:3001", "https://example.com/path", "https://user:pass@example.com", "https://example.com?x=1"]) {
  check({ VERCEL: "1", SITE_URL: site }, undefined, true);
}
check({ VERCEL: "1" }, undefined, true);
console.log("OK origen local, dominio suministrado por Vercel y rechazo de configuraciones públicas inválidas.");
