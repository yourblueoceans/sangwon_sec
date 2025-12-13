// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ★ 중요: 리포지토리 이름 앞뒤로 슬래시(/)를 꼭 붙여야 합니다.
  base: '/sangwon_sec/',
})

