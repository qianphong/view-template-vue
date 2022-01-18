import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        IconsResolver({ prefix: 'Icon', customCollections: 'custom' }),
      ],
      directoryAsNamespace: true,
      dts: 'src/types/components.d.ts',
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(resolve(__dirname, 'src/assets/icons')),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
