import { http } from '@/service/http'

export interface IFooItem {
  id: string
  name: string
}

/**
 * 获取字典项
 */
export function orchctmsDictionaryIds(dictCodeList: string[]) {
  return http.post<IFooItem>({ url: '/dict/queryValidValueList', data: { dictCodeList } })
}
