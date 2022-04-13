import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [imagetools({ force: true })],
      resolve: {
        alias: {
          '@lib': path.resolve('./src/lib'),
          '@components': path.resolve('./src/lib/components'),
          '@layout': path.resolve('./src/lib/components/layout'),
          '@utils': path.resolve('./src/lib/utils')
        }
      }
    }
  },

  preprocess: [
    preprocess({ postcss: true })
  ]
}

export default config
