import { http } from '@/utils/http'
import apiPreFix from '@/enum/api-pre-fix'
import type { IUserFunctionItem } from '@/api/types/common'

export interface IFooItem {
  id: string
  name: string
}

/**
 * 获取字典项
 */
export function orchctmsDictionaryIds(dictCodeList: string[]) {
  return http.post<IFooItem>(apiPreFix.CTP_PORTAL + '/dict/queryValidValueList', { dictCodeList })
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return http.post<IUserFunctionItem>(
    apiPreFix.CTP_USER + '/Platformumuserbaseinfo/getUserInfo',
    {},
  )
}
