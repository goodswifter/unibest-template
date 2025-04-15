// 修复 Element Plus 中的 hyphenate 重复声明问题
export default defineNuxtPlugin(() => {
  // 这个插件在应用启动时运行
  // 当元素加载时，我们确保 hyphenate 函数只被声明一次
  // 这只是一个占位符，实际修复是通过 nuxt.config.ts 中的 vite 配置完成的
})
