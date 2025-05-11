import '@/style/index.scss'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'virtual:uno.css'
import { createSSRApp } from 'vue'
import { add, debounce, throttle } from 'lodash-es'

import App from './App.vue'
import { prototypeInterceptor, requestInterceptor, routeInterceptor } from './interceptors'
import pinia from './store'
import { homeApi } from './pages-sub/pages-home/api'

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
homeApi
  .getTestData()
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

// 测试 lodash-es
// 1. 大数相加
const sum = add(0.1, 0.2)
console.log('大数相加:', sum) // 0.3

// 2. 单位转换

// 3. 千分位
const formatThousands = (num: number) => {
  return num.toLocaleString()
}
console.log('千分位:', formatThousands(1234567)) // 1,234,567

// 4. 时间格式
// const formatDate = (date: Date) => {
//   return format(date, 'YYYY-MM-DD HH:mm:ss')
// }
// console.log('时间格式:', formatDate(new Date())) // 2024-03-21 10:30:00

// 6. 防抖
const debouncedSearch = debounce((value: string) => {
  console.log('搜索:', value)
}, 300)
debouncedSearch('测试防抖')

// 7. 节流
const throttledScroll = throttle(() => {
  console.log('滚动事件触发')
}, 1000)
throttledScroll()
