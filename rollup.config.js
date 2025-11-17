const resolve = require('@rollup/plugin-node-resolve').default;
const peerDepsExternal = require('rollup-plugin-peer-deps-external').default;

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
    },
  ],
  plugins: [peerDepsExternal(), resolve()],
  external: ['react', 'react-dom'],
};
