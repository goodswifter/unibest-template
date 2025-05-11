import { http } from '@/utils/http'
import apiPreFix from '@/enum/apiPreFix'

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
