import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const STATIC_ASSETS = [
  'data.js',
  'cu_campus_map.jpg',
  'icon.svg',
  'manifest.json',
  'service-worker.js',
  'vendor/leaflet.css',
  'vendor/leaflet.js',
];

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-cu-nav-static-assets',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) return;
      for (const relPath of STATIC_ASSETS) {
        const src = path.resolve(process.cwd(), relPath);
        const dest = path.resolve(distDir, relPath);
        if (fs.existsSync(src)) {
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.copyFileSync(src, dest);
        }
      }
    },
  };
}

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  plugins: [copyStaticAssetsPlugin()],
});
