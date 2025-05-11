// uno.config.ts
import {
  type Preset,
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  presetUno,
} from 'unocss'

import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet'

// @see https://unocss.dev/presets/legacy-compat
// import { presetLegacyCompat } from '@unocss/preset-legacy-compat'

const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false

const presets: Preset[] = []
if (isMp) {
  // 使用小程序预设
  presets.push(presetApplet(), presetRemRpx({ baseFontSize: 4 }))
} else {
  presets.push(
    // 非小程序用官方预设
    presetUno(),
    presetRemRpx({ baseFontSize: 4 }),
    // 支持css class属性化
    presetAttributify(),
  )
}
export default defineConfig({
  presets: [
    ...presets,
    // 支持图标，需要搭配图标库，eg: @iconify-json/carbon, 使用 `<button class="i-carbon-sun dark:i-carbon-moon" />`
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    // 将颜色函数 (rgb()和hsl()) 从空格分隔转换为逗号分隔，更好的兼容性app端，example：
    // `rgb(255 0 0)` -> `rgb(255, 0, 0)`
    // `rgba(255 0 0 / 0.5)` -> `rgba(255, 0, 0, 0.5)`
    // 与群友的正常写法冲突，先去掉！（2024-05-25）
    // presetLegacyCompat({
    //   commaStyleColorFunction: true,
    // }) as Preset,
  ],
  theme: {
    fontSize: {
      '2xs': '10rpx',
      xs: '12rpx',
      sm: '14rpx',
      base: '16rpx',
      lg: '18rpx',
      xl: '20rpx',
      '2xl': '22rpx',
      '3xl': '24rpx',
      '4xl': '36rpx',
    },
  },
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: {
    // 布局
    'wh-full': 'w-full h-full',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-center': 'flex justify-center items-center',
    'flex-x-start': 'flex-y-center justify-start',
    'flex-x-between': 'flex-y-center justify-between',
    'flex-x-end': 'flex-y-center justify-end',
    'flex-between': 'flex justify-between',
    'flex-col': 'flex flex-col',
    'flex-col-center': 'flex-col justify-center items-center',
    'flex-col-between': 'flex-col justify-between',

    // 绝对定位
    'absolute-tl': 'absolute top-0 left-0',
    'absolute-tr': 'absolute top-0 right-0',
    'absolute-bl': 'absolute bottom-0 left-0',
    'absolute-br': 'absolute bottom-0 right-0',
    'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'absolute-bottom': 'absolute bottom-0 left-1/2 -translate-x-1/2',
    'absolute-bottom-full': 'absolute bottom-0 left-0 right-0',
    'absolute-top': 'absolute top-0 left-1/2 -translate-x-1/2',
    'absolute-top-full': 'absolute top-0 left-0 right-0',
    'absolute-left': 'absolute left-0 top-1/2 -translate-y-1/2',
    'absolute-left-full': 'absolute left-0 top-0 bottom-0',
    'absolute-right': 'absolute right-0 top-1/2 -translate-y-1/2',
    'absolute-right-full': 'absolute right-0 top-0 bottom-0',

    // 边框 border-line: 简写bl
    'border-color': 'border-gray-800',
    'border-line': 'border-solid border-1',
    'bl-gray': 'border-line border-color',
    'bl-primary': 'border-line border-primary',
    'bl-red': 'border-line border-red',
    'bl-gray-2': 'bl-gray border-2',
    'bl-primary-2': 'bl-primary border-2',
    'bl-transparent': 'border-line border-transparent',
    'bl-bottom': 'bl-transparent border-b-gray-800',
    'bl-left': 'bl-transparent border-l-gray-800',
    'bl-right': 'bl-transparent border-r-gray-800',
    'bl-top': 'bl-transparent border-t-gray-800',

    // 文本
    ellipsis: 'text-ellipsis overflow-hidden whitespace-nowrap',

    // 颜色
    'c-3': 'color-gray-300',
    'c-6': 'color-gray-600',
    'c-9': 'color-gray-900',
    // 背景颜色
    'bg-color': 'bg-gray-500',
    'bg-gray-light': 'bg-gray-100',
    'el-bg-color': 'bg-bg_color', // 添加 Element Plus 背景颜色快捷方式

    // 动画
    'infinite-rotate': 'transform duration-300 rotate-z-360',
  },
  transformers: [
    // 启用 @apply 功能
    transformerDirectives(),
    // 启用 () 分组功能
    // 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify({
      // 解决与第三方框架样式冲突问题
      prefixedOnly: true,
      prefix: 'fg',
    }),
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    // 匹配 `p-n` 格式，其中 `n` 是动态数值
    // 边框圆角 border-radius: 简写br
    [/^rounded-(\d+)$/, ([, n]) => ({ 'border-radius': `${n}px`, overflow: 'hidden' })],
    // 上边框圆角
    [
      /^br-top-(\d+)$/,
      ([, n]) => ({
        'border-top-left-radius': `${n}px`,
        'border-top-right-radius': `${n}px`,
        overflow: 'hidden',
      }),
    ],
    // 下边框圆角
    [
      /^br-bottom-(\d+)$/,
      ([, n]) => ({
        'border-bottom-left-radius': `${n}px`,
        'border-bottom-right-radius': `${n}px`,
        overflow: 'hidden',
      }),
    ],
    // 左边框圆角
    [
      /^br-left-(\d+)$/,
      ([, n]) => ({
        'border-top-left-radius': `${n}px`,
        'border-bottom-left-radius': `${n}px`,
        overflow: 'hidden',
      }),
    ],
    // 右边框圆角
    [
      /^br-right-(\d+)$/,
      ([, n]) => ({
        'border-top-right-radius': `${n}px`,
        'border-bottom-right-radius': `${n}px`,
        overflow: 'hidden',
      }),
    ],
  ],
})

/**
 * 最终这一套组合下来会得到：
 * mp 里面：mt-4 => margin-top: 32rpx  == 16px
 * h5 里面：mt-4 => margin-top: 1rem == 16px
 *
 * 如果是传统方式写样式，则推荐设计稿设置为 750，这样设计稿1px，代码写1rpx。
 * rpx是响应式的，可以让不同设备的屏幕显示效果保持一致。
 */
