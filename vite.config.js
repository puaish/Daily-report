import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToRem from "postcss-pxtorem"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postCssPxToRem({
  //         rootValue: 156, // 设计图最大宽度除以10  //比如750的宽就写成75  我这边是1125的宽
  //         propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
  //       })
  //     ]
  //   }
  // },
})
