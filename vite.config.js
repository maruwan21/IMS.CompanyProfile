import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE: sub-path deploy. Default '/' (dev, Docker). GitHub Pages memakai '/IMS.CompanyProfile/'.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE || '/',
    plugins: [react()],
  }
})
