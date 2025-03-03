import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(
  {
    server:{
      proxy:{
        '/user':'http://localhost:42069'
      }
    },
    plugins: [react(),
    tailwindcss(),
  ],}
)
