import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- This line
import tailwindcss from '@tailwindcss/vite' // <--- This line

// ...
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})