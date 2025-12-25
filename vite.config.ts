
import { defineConfig } from 'vite';

export default defineConfig({
  // هذا السطر مهم جداً لعمل الموقع على GitHub Pages
  base: './', 
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
