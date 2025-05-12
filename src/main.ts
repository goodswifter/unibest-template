import '@/style/index.scss'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'virtual:uno.css'
import { createSSRApp } from 'vue'

import App from './App.vue'
import { prototypeInterceptor, requestInterceptor, routeInterceptor } from './interceptors'
import pinia from './store'
import { commonApi } from './api'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  app.use(VueQueryPlugin)

  // 测试
  setTimeout(() => {
    commonApi.getPriceTypes().then(res => {
      console.log(res.model[0], 'res111')
    })
  }, 1000)

  return {
    app,
  }
}
