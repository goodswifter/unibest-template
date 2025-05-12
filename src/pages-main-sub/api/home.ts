import { http } from '@/utils/http'
import { ApiPreFixEnum } from '@/enum'

export interface IFooItem {
  id: string
  name: string
}

/**
 * 获取字典项
 */
export function orchctmsDictionaryIds(dictCodeList: string[]) {
  return http.post<IFooItem>(ApiPreFixEnum.CTP_PORTAL + '/dict/queryValidValueList', {
    dictCodeList,
  })
}
