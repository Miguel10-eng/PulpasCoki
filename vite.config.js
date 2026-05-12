import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the app under /PulpasCoki/, but Vercel serves at /.
  base: process.env.VERCEL
    ? '/'
    : process.env.NODE_ENV === 'production'
      ? '/PulpasCoki/'
      : '/',
})
