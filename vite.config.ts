import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: '/vue-view-template/',
  plugins: [
    vue(),
    Unocss(),
    Pages(),
    Layouts({
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}`,
      '#': `${resolve(__dirname, './types')}`,
    },
  },
})
