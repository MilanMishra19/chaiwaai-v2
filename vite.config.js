import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Ensure correct base path
  build: {
    outDir: 'dist', // Ensures Vite builds to the correct folder
  }
})
