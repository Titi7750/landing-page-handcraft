import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import remix from 'vite-plugin-remix'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), remix()],
})
