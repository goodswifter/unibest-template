import qs from 'qs'
import { platform } from '@/utils/platform'
import { BASE_URL } from '@/config/env'

export type CustomRequestOptions = UniApp.RequestOptions & {
  query?: Record<string, any>
  /** 出错时是否隐藏错误提示 */
  hideErrorToast?: boolean
  /** url前缀 */
  urlPrefix?: string
} & UniUploadFileReq // 添加uni.uploadFile参数类型

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: CustomRequestOptions) {
    // 接口请求支持通过 query 参数配置 queryString
    if (options.query) {
      const queryStr = qs.stringify(options.query)
      if (options.url.includes('?')) {
        options.url += `&${queryStr}`
      } else {
        options.url += `?${queryStr}`
      }
    }

    console.log(__VITE_APP_PROXY__, '--__VITE_APP_PROXY__---')
    // 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      // #ifdef H5
      if (JSON.parse(__VITE_APP_PROXY__)) {
        // 自动拼接代理前缀
        // options.url = import.meta.env.VITE_APP_PROXY_PREFIX + options.url
        options.url = BASE_URL + options.url
      } else {
        options.url = BASE_URL + options.url
      }
      // #endif
      console.log(BASE_URL, '====', options.url)
      // 非H5正常拼接
      // #ifndef H5
      options.url = BASE_URL + options.url
      // #endif
      // TIPS: 如果需要对接多个后端服务，也可以在这里处理，拼接成所需要的地址
    }
    // 1. 请求超时
    options.timeout = 10000 // 10s
    // 2. （可选）添加小程序端请求头标识
    options.header = {
      platform, // 可选，与 uniapp 定义的平台一致，告诉后台来源
      ...options.header,
    }
    // 3. 添加 token 请求头标识
    // const userStore = useUserStore()
    // const { token } = userStore.userInfo as unknown as UserModel
    const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJjbGVudElkXCI6XCIxOTIxNzQ1NjAzMzcwNjY4MDMyXCIsXCJmbGFnXCI6MCxcImxvZ2luSWRcIjpcIjA4MzRkYWViMzAyYjRlZjZhMzFhZDIzYzkwYjJhZjE0XCIsXCJsb2dpbk5hbWVcIjpcInRlc3QwMVwiLFwibG9naW5WZXJzaW9uQ29kZVwiOjE3NDcwMTQ4MzA4MDcsXCJ1c2VyQmFzZUlkXCI6XCJiMTBmZjViMzQ3ZTU0NDJjYTM2MWU5OWIyYTU5MWFjOVwiLFwidXNlcm5hbWVcIjpcIui1teWkp-WKm1wifSIsImlhdCI6MTc0NzAxNDgzMCwiZXhwIjoxNzQ3NjE5NjMwfQ.ehWt8jVSrhiRJKhNDFxqMiFCbnCsIVdWocLhl94hdO0`
    if (token) {
      options.header.Authorization = token
    }
  },
}

export const requestInterceptor = {
  install() {
    // 拦截 request 请求
    uni.addInterceptor('request', httpInterceptor)
    // 拦截 uploadFile 文件上传
    uni.addInterceptor('uploadFile', httpInterceptor)
  },
}
