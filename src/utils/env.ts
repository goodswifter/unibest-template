import { isMpWeixin } from './platform'

/**
 * 根据微信小程序当前环境，判断应该获取的 baseUrl
 */
export const getEnvBaseUrl = () => {
  console.log('getEnvBaseUrl 函数被调用')
  // 请求基准地址
  let baseUrl = import.meta.env.VITE_BASE_URL
  console.log('环境变量 VITE_BASE_URL:', import.meta.env.VITE_BASE_URL)
  console.log('当前 baseUrl:', baseUrl)

  // 微信小程序端环境区分
  if (isMpWeixin) {
    const {
      miniProgram: { envVersion },
    } = uni.getAccountInfoSync()

    switch (envVersion) {
      case 'develop':
        baseUrl = import.meta.env.VITE_BASE_URL__WEIXIN_DEVELOP || baseUrl
        break
      case 'trial':
        baseUrl = import.meta.env.VITE_BASE_URL__WEIXIN_TRIAL || baseUrl
        break
      case 'release':
        baseUrl = import.meta.env.VITE_BASE_URL__WEIXIN_RELEASE || baseUrl
        break
    }
  }

  return baseUrl
}

/**
 * 根据微信小程序当前环境，判断应该获取的 UPLOAD_BASEURL
 */
export const getEnvBaseUploadUrl = () => {
  // 请求基准地址
  let baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL

  // 微信小程序端环境区分
  if (isMpWeixin) {
    const {
      miniProgram: { envVersion },
    } = uni.getAccountInfoSync()

    switch (envVersion) {
      case 'develop':
        baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_DEVELOP || baseUploadUrl
        break
      case 'trial':
        baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_TRIAL || baseUploadUrl
        break
      case 'release':
        baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_RELEASE || baseUploadUrl
        break
    }
  }

  return baseUploadUrl
}
