// @ts-check
import { defineConfig } from 'astro/config';

// Site runs on subdomain https://portofolio.rezagiovanni.my.id/
// Base path is "/" since it's a dedicated subdomain (not a path under main domain).
export default defineConfig({
  site: 'https://portofolio.rezagiovanni.my.id',
  base: '/',
  server: { host: true },
  build: { outDir: 'dist' },
});
