import path from 'path'
import preprocess from "svelte-preprocess"
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      '@lib': path.resolve('./src/lib'),
      '@components': path.resolve('./src/lib/components'),
      '@layout': path.resolve('./src/lib/components/layout'),
      '@utils': path.resolve('./src/lib/utils'),
      '@images': path.resolve('./src/lib/images'),
      '@icons': path.resolve('./src/lib/icons'),
    },
  },
  preprocess: [preprocess({
    postcss: true
  })]
}

export default config
