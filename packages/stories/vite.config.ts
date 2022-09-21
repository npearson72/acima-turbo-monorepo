import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Allows emotion css prop
      babel: {
        plugins: ['@emotion/babel-plugin'] // Allows emotion css source maps
      }
    })
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  define: {
    process: {
      env: {
        PLATFORM: 'stories'
      }
    }
  }
});
