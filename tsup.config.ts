import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Output both CommonJS and ESM formats
  dts: true, // Generate TypeScript declaration files
  clean: true, // Clean the output directory before each build
  minify: true, // Minify the output for optimized performance
});
