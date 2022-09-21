// eslint-disable-next-line import/no-extraneous-dependencies
require('esbuild')
  .build({
    bundle: true,
    entryPoints: ['src/index.ts'],
    keepNames: true,
    logLevel: 'error',
    minify: true,
    outfile: 'dist/index.js',
    platform: 'node',
    sourcemap: 'linked',
    sourcesContent: false
  })
  .catch(() => process.exit(1));
