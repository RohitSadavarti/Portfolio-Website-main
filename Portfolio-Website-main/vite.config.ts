import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or your current react plugin

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website-main/', // Add your exact repository name here wrapped in slashes
})
