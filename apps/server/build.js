const fs = require('fs');
const esbuild = require('esbuild');
const yargs = require('yargs-parser');

const { _, ...argv } = yargs(process.argv.slice(2)) || {};

esbuild
  .build({
    bundle: true,
    entryPoints: ['src/index.ts'],
    keepNames: true,
    logLevel: 'error',
    outfile: 'dist/index.js',
    platform: 'node',
    sourcemap: 'linked',
    sourcesContent: true,
    ...argv
  })
  .then(() => {
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist');
    }

    if (!fs.existsSync('dist/schema.prisma')) {
      fs.copyFileSync('prisma/schema.prisma', 'dist/schema.prisma');
    }

    if (!fs.existsSync('dist/libquery_engine-darwin.dylib.node')) {
      fs.copyFileSync(
        '../../node_modules/.prisma/client/libquery_engine-darwin.dylib.node',
        'dist/libquery_engine-darwin.dylib.node'
      );
    }
  })
  .catch(() => process.exit(1));
