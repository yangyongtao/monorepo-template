import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3002
  },
  build: {
    outDir: './dist/commonUtils',
    rollupOptions,
    // 可以指定压缩工具terser, 需要安装后使用 npm i terser -D
    minify: false,
    // 是否生成 sourcemap 文件，方便debug
    sourcemap: true,
    // css 代码分割
    cssCodeSplit: true,
    lib: {
      entry: './src/utils/index.ts',
      name: 'commonUtils',
      fileName: 'common-utils',
      // 输出常用的三种模块类型
      formats: ['es', 'umd', 'iife']
    }
  }
})
