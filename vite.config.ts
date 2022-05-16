import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        IconsResolver({ prefix: 'Icon', customCollections: 'custom' }),
      ],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts',
    }),
    Icons({
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader(resolve(__dirname, 'src/assets/icons')),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './types'),
    },
  },
})
