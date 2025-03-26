import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from 'vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/card-generator/',
  plugins: [
    react(),
    purgecss({
      content: ['./src/**/*.jsx', './src/**/*.scss'],
      safelist: {
        standard: [/^bg-/, 'flow']
      }
    })
  ]
})
