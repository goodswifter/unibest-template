import { http } from '@/utils/http'
import type { IUserFunctionItem, IUserInfo } from '@/api/types'
import { ApiPrefixEnum } from '@/enum'

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
  return http.post<IUserInfo>({
    url: '/Platformumuserbaseinfo/getUserInfo',
    urlPrefix: ApiPrefixEnum.CTP_USER,
    data: {},
  })
}
