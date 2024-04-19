import { join } from 'node:path'
import { defineConfig } from 'vite'
import svg from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svg(), react()],
  resolve: {
    alias: {
      '~': join(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
