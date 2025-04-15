import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import rules from './rules'
import theme from './theme'

export default defineConfig({
  // 合并配置
  ...rules,
  ...theme,
  // 预设
  presets: [
    presetIcons({ scale: 1.2, warn: true }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),

    // 属性化模式 & 无值的属性模式
    presetAttributify(),
    presetWind3(), // 预设的样式
    presetRemToPx({ baseFontSize: 4 }), // 将rem转换为px
  ],
  // 安全列表，这些类名将始终生成
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
