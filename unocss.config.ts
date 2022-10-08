import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: { display: 'inline-block' },
    }),
  ],
  shortcuts: [],
})
