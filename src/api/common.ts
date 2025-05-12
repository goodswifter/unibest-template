import { http } from '@/utils/http'
import type { PriceTypeModel } from '@/api/types'
import { UnitTypeEnum, ApiPreFixEnum } from '@/enum'

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

/**
 * 单位配置查询
 * @param unitType 单位类型
 *   查询计量单位：measureUnit传1
 *   查询计价单位：pricingUnit传1
 *   查询全部：不需要传参数
 */
export const getPriceTypes = (unitType: UnitTypeEnum = UnitTypeEnum.MEASURE_AND_PRICING) => {
  let data = {}
  if (unitType == UnitTypeEnum.MEASURE) {
    data = { measureUnit: 1 }
  } else if (unitType == UnitTypeEnum.PRICING) {
    data = { pricingUnit: 1 }
  }
  return http.post<PriceTypeModel[]>(ApiPreFixEnum.CTP_PORTAL + '/pricingType/query', data)
}
