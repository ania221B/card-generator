import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/card-generator/',
  plugins: [
    react()
    // pluginPurgeCss({
    //   content: ['./src/**/*.jsx', './src/**/*.scss'],
    //   safelist: {
    //     standard: ['flow'],
    //     deep: [/flow/],
    //     greedy: [/^bg-/, /^flow$/]
    //   }
    // })
  ]
})
