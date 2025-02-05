import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    sourcemap: false,
    persistentCache: false,
    presetEnv: false,
    progress: false,
    output: {
      publicPath: '/dist/',
    },
  },
  server: {
    hmr: {
      path: "/__farm_hmr",
    }
  },
  plugins: [
    ['@farmfe/plugin-react', { runtime: 'automatic' }],
    '@farmfe/plugin-sass',
  ],
});
