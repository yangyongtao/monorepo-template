import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  build: {
    outDir: './dist/commonUI',
    rollupOptions,
    // 可以指定压缩工具terser, 需要安装后使用 npm i terser -D
    minify: false,
    // 是否生成 sourcemap 文件，方便debug
    sourcemap: true,
    // css 代码分割
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'commonUI',
      fileName: 'common-ui',
      // 输出常用的三种模块类型
      formats: ['es', 'umd', 'iife']
    }
  }
})
