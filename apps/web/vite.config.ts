import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      emptyOutDir: true,
      outDir: 'dist'
    },
    define: {
      process: {
        env: {
          PLATFORM: 'web',
          SERVER_URL: process.env.VITE_SERVER_URL
        }
      }
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    },
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
    server: {
      port: 4010
    }
  });
};
