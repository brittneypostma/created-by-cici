import adapter from '@sveltejs/adapter-auto';
import path from 'path'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '@lib': path.resolve('./src/lib'),
          '@components': path.resolve('./src/lib/components'),
          '@styles': path.resolve('./src/lib/styles'),
          '@utils': path.resolve('./src/lib/utils')
        }
      }
    }
  }
};

export default config;
