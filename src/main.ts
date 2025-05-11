import { commonApi } from '@/api'
import '@/style/index.scss'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'virtual:uno.css'
import { createSSRApp } from 'vue'

import App from './App.vue'
import { prototypeInterceptor, requestInterceptor, routeInterceptor } from './interceptors'
import pinia from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  app.use(VueQueryPlugin)

  return {
    app,
  }
}

// test
commonApi
  .orchctmsDictionaryIds(['1', '2', '3'])
  .then(res => {
    console.log('请求成功：', res)
  })
  .catch(err => {
    console.error('请求失败：', err)
    // 打印更详细的错误信息
    if (err.statusCode) {
      console.error('状态码：', err.statusCode)
    }

    if (err.data) {
      console.error('响应数据：', err.data)
    }
  })
