import { http } from '@/service/http'
import { ApiPrefixEnum } from '@/enum'

export interface IFooItem {
  id: string
  name: string
}

/**
 * 获取字典项
 */
export function orchctmsDictionaryIds(dictCodeList: string[]) {
  return http.post<IFooItem>(ApiPrefixEnum.CTP_PORTAL + '/dict/queryValidValueList', {
    dictCodeList,
  })
}
