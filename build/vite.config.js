import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'web',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../web/src', import.meta.url))
    }
  }
})
