import { defineConfig } from 'unocss'

// 主题配置
export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      secondary: '#', // 次要颜色
      success: '#', // 成功颜色
      warning: '#', // 警告颜色
      danger: '#', // 危险颜色
      red: { DEFAULT: '#e60012' },
      'base-bg': 'var(--el-bg-color)',
    },
    fontSize: {
      '2xs': '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '36px',
    },
  },
})
