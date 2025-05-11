import { CustomRequestOptions } from '@/interceptors/request'

export const http = <T>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<BaseRes<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        const data = res.data as BaseRes<T>
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('-----')
          if (data.succeed) {
            resolve(data)
          } else {
            // TODO: 错误提示多行处理
            // nextTick(() => {
            //   const toast = useToast()
            //   toast.text(data.message || '请求错误消息')
            // })
            uni.showToast({
              icon: 'none',
              title: data.message || '请求错误消息',
            })
            reject(data)
          }
          // 2.1 提取核心数据 res.data
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          // userStore.clearUserInfo()
          // uni.navigateTo({ url: '/pages/login/login' })
          reject(data)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          !options.hideErrorToast &&
            uni.showToast({
              icon: 'none',
              title: data.message || '请求错误',
            })
          reject(data)
        }
      },
      // 响应失败
      fail(err) {
        console.log('--fail---', err)
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })

        const data = {
          code: '',
          succeed: false,
          message: err as any,
          model: null as any,
        } as BaseRes<T>

        reject(data)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @param header 请求头，默认为json格式
 * @returns
 */
export const httpGet = <T>(
  url: string,
  query?: Record<string, any>,
  header?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    method: 'GET',
    header,
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @param header 请求头，默认为json格式
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
  header?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
    header,
  })
}

http.get = httpGet
http.post = httpPost
