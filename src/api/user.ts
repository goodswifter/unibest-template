import { http } from '@/utils/http'
import type { IUserFunctionItem, IUserInfo } from '@/api/types'
import { ApiPreFixEnum } from '@/enum'

/**
 * 获取用户菜单
 */
export function getUserFunction() {
  return http.post<IUserFunctionItem[]>(
    ApiPreFixEnum.CTP_USER + '/user/userInfo/getUserFunction',
    {},
  )
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return http.post<IUserInfo>(ApiPreFixEnum.CTP_USER + '/Platformumuserbaseinfo/getUserInfo', {})
}
