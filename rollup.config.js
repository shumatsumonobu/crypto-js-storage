import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import pkg from './package.json';

// Returns true when NODE_ENV is set to "production".
const isPro = () => {
  return process.env.NODE_ENV === 'production';
}

export default {
  input: './src/index.ts',
  plugins: [
    // Compile TypeScript and emit declaration files to the directory specified in tsconfig.
    typescript({
      tsconfigDefaults: {compilerOptions: {}},
      tsconfig: "tsconfig.json",
      tsconfigOverride: {compilerOptions: {}},
      useTsconfigDeclarationDir: true
    }),

    // Minify output in production builds only.
    isPro() && terser(),

    // Allow importing JSON files as ES modules.
    json(),

    // Convert CommonJS dependencies to ES modules for bundling.
    commonjs(),

    // Resolve bare module specifiers from node_modules for browser compatibility.
    nodeResolve({
      mainFields: ['module', 'main'],
      browser: true
    })
  ],
  output: [
    // ESM build — consumed by bundlers (Webpack, Vite, Rollup, etc.).
    {
      format: 'esm',
      file: pkg.module
    },
    // UMD build — usable via <script> tag; exposes window.CryptoJsStorage.
    {
      format: 'umd',
      file: pkg.browser,
      // Convert package name to PascalCase for the global variable name.
      // e.g. "crypto-js-storage" → "CryptoJsStorage"
      name: pkg.name
        .replace(/^.*\/|\.js$/g, '')
        .replace(/^([a-z])/, group => group.toUpperCase())
        .replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))
    }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}
