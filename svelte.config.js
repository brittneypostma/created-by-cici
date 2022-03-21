import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: true,
    vite: {
      resolve: {
        alias: {
          '@lib': path.resolve('./src/lib'),
          '@components': path.resolve('./src/lib/components'),
          '@utils': path.resolve('./src/lib/utils')
        }
      }
    }
  },

  preprocess: [
    preprocess({
      default: {
        style: "postcss"
      },
      postcss: true
    })
  ]
}

export default config
