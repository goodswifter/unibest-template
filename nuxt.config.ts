// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@element-plus/nuxt', '@unocss/nuxt'],
  unocss: {
    // 使用项目中的UnoCSS配置
    configFile: './uno/index.ts',
  },
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
    components: ['ElMessage', 'ElMessageBox', 'ElNotification'],
    directives: {
      loading: ['loading'],
      'infinite-scroll': ['infinite-scroll'],
    },
  },
  devServer: {
    host: '0.0.0.0', // 设置为 true 使用局域网 IP
    port: 3700,
  },
})
