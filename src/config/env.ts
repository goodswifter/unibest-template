enum EnvKeyEnum {
  development = 'development',
  uat = 'uat',
  production = 'production',
  local = 'local',
}

type IUrlMapItem = Record<keyof typeof EnvKeyEnum, string>

type urlMapType = {
  [key: string]: IUrlMapItem
}

const urlMap: urlMapType = {
  ctp: {
    [EnvKeyEnum.local]: 'https://ctpdelta.10000da.vip',
    [EnvKeyEnum.development]: 'https://ctpdelta.10000da.vip',
    [EnvKeyEnum.uat]: 'https://ctp.wanlianyida.com',
    [EnvKeyEnum.production]: 'https://ctp.10000da.cn',
  },
  ekf: {
    [EnvKeyEnum.local]: 'http://ekf.10000da.vip',
    [EnvKeyEnum.development]: 'http://ekf.10000da.vip',
    [EnvKeyEnum.uat]: 'http://ekf.10000da.vip',
    [EnvKeyEnum.production]: 'https://ekf.10000da.cn',
  },
  _4pl: {
    [EnvKeyEnum.local]: 'http://4plbeta.10000da.vip',
    [EnvKeyEnum.development]: 'http://4plbeta.10000da.vip',
    [EnvKeyEnum.uat]: 'https://4pl.wanlianyida.com',
    [EnvKeyEnum.production]: 'https://manage.10000da.cn',
  },
  _3pl: {
    [EnvKeyEnum.local]: 'http://3pldelta.10000da.vip',
    [EnvKeyEnum.development]: 'http://3pldelta.10000da.vip',
    [EnvKeyEnum.uat]: 'https://3u.wanlianyida.com',
    [EnvKeyEnum.production]: 'https://www.10000da.cn',
  },
}

type urlPreFixType = Record<keyof typeof urlMap, string>

/** 是否是生产 **/
const IS_PROD = import.meta.env.MODE === EnvKeyEnum.production
// const IS_PROD = import.meta.env.VITE_NODE_ENV === EnvKeyEnum.production

/** 环境变量 **/
const NODE_ENV = import.meta.env.MODE
// const NODE_ENV = import.meta.env.VITE_NODE_ENV
console.log(import.meta.env, '=====')

/** 各个服务url前缀 */
const URL_PRE_FIX: urlPreFixType = {}
Object.keys(urlMap).forEach(item => {
  URL_PRE_FIX[item] = urlMap[item][NODE_ENV]
})

const BASE_URL = URL_PRE_FIX.ctp

export { IS_PROD, BASE_URL, URL_PRE_FIX, NODE_ENV }
