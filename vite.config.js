import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/jclauneurolab.github.io/jclaulab.github.io/",
  plugins: [react()],
})
