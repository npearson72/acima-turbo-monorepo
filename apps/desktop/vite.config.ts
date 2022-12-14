import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      // Tauri supports es2021
      target: ['es2021', 'chrome100', 'safari13'],
      // don't minify for debug builds
      minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
      // produce sourcemaps for debug builds
      sourcemap: !!process.env.TAURI_DEBUG
    },
    // Vite optons tailored for Tauri development and only applied
    // in `tauri dev` or `tauri build` prevent vite from obscuring rust errors
    clearScreen: false,
    define: {
      process: {
        env: {
          PLATFORM: 'web',
          SERVER_URL: process.env.VITE_SERVER_URL
        }
      }
    },
    // to make use of `TAURI_DEBUG` and other env variables
    // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
    envPrefix: ['VITE_', 'TAURI_'],
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
    // tauri expects a fixed port, fail if that port is not available
    server: {
      port: 4030,
      strictPort: true
    }
  });
};
