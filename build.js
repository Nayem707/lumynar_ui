// build.js
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outdir: 'dist',
    format: 'esm',
    minify: false,
    sourcemap: true,
    loader: { '.jsx': 'jsx' },
    external: ['react', 'react-dom'], // <-- important
  })
  .catch(() => process.exit(1));
