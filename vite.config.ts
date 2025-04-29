import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BeHive/', // Base path for GitHub Pages deployment
  build: {
    outDir: 'docs', // Changing output directory from 'dist' to 'docs'
    emptyOutDir: true
  }
})
