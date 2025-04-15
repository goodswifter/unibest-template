import { defineConfig } from 'unocss'

// 自定义规则
export default defineConfig({
  // 自定义规则
  rules: [
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
  // 自定义快捷方式
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

    // x轴两边自适应, 宽度为1200px
    'x-auto-1200': 'm-x-auto w-1200',
    'mx-auto': 'm-x-auto',

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
})
