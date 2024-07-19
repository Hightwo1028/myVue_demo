import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {  //配置路徑別名   輸入@會自動找到src目錄
      '@' : path.resolve(__dirname, 'src')
    }
  }
})
