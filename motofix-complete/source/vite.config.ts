import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { promotionalHtml } from './scripts/promotional-html'
export default defineConfig({ publicDir: '../website', plugins: [react(), promotionalHtml(), tailwindcss()], build: { rollupOptions: { input: ['promotional/index.html', 'system/index.html'] } } })
