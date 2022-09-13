import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  build: {
    emptyOutDir: true,
    outDir: '../../dist/apps/mobile',
    sourcemap: true
  }
});
