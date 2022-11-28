import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import WebConfig from 'vite-plugin-web-config'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_PUBLIC_PATH || '/',
    plugins: [
      Vue(),
      UnoCSS(),
      WebConfig(),
      Pages({ exclude: ['**/components/**', '**/**/*.ts'] }),
      Layouts(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [],
        directoryAsNamespace: true,
        dts: 'types/components.d.ts',
      }),
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
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
