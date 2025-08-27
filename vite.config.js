import { defineConfig } from 'vite'

// Nếu dùng React thì thêm plugin react
// import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/marry-me-hong-anh/', // 👈 quan trọng: đúng tên repo
  // plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Bỏ qua lỗi import không resolve được
        if (warning.code === 'UNRESOLVED_IMPORT') return
        warn(warning)
      }
    }
  }
})
