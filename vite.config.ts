import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_PUBLIC_PATH || '/',
    plugins: [
      Vue(),
      UnoCSS(),
      Pages({ exclude: ['**/components/**', '**/**/*.ts'] }),
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
  }
})
