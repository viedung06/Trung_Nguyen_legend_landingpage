import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Dùng base: './' để tài nguyên (JS/CSS/ảnh) tự động nhận đường dẫn tương đối trên GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
