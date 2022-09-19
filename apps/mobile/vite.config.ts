import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Allows emotion css prop
      babel: {
        plugins: ['@emotion/babel-plugin'] // Allows emotion css source maps
      }
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      filename: 'stats/index.html'
    })
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist'
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server: {
    port: 4020
  }
});
