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
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: '../../stats/web.html'
    })
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    emptyOutDir: true,
    outDir: '../../dist/apps/web',
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          return undefined;
        }
      }
    }
  },
  server: {
    port: 4010
  }
});
