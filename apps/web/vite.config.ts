import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
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
