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
      extraProperties: { display: 'inline-block' },
    }),
  ],
  rules: [
    [
      /bg-img-([\w-]+)/,
      ([_, name]) => {
        return {
          'background-image': `url(/images/bg-${name}.png)`,
          'background-repeat': 'no-repeat',
        }
      },
    ],
  ],
  shortcuts: [],
})
