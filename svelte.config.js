import preprocess from 'svelte-preprocess'
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
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
      postcss: true
    })
  ]
}

export default config

// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV
const dev = mode === 'development'
process.env.TAILWIND_MODE = dev ? 'watch' : 'build'
