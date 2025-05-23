import { http } from '@/service/http'
import type { IUserFunctionItem, UserInfoModel } from '@/api/types'

/**
 * 获取用户菜单
 */
export function getUserFunction() {
  return http.post<IUserFunctionItem[]>({
    url: '/user/userInfo/getUserFunction',
    urlPrefix: ApiPrefixEnum.CTP_USER,
    data: {},
  })
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return http.post<UserInfoModel>({
    url: '/Platformumuserbaseinfo/getUserInfo',
    urlPrefix: ApiPrefixEnum.CTP_USER,
    data: {},
  })
}
