import { http } from '@/utils/http'
import apiPreFix from '@/enum/api-pre-fix'
import type { IUserFunctionItem, PriceTypeModel } from '@/api/types'
import { UnitTypeEnum } from '@/enum'

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

/**
 * 单位配置查询
 * @param unitType 单位类型
 *   查询计量单位：measureUnit传1
 *   查询计价单位：pricingUnit传1
 *   查询全部：不需要传参数
 */
export const getPriceTypes = (unitType: UnitTypeEnum = UnitTypeEnum.measureAndPricingUnit) => {
  let data = {}
  if (unitType == UnitTypeEnum.measureUnit) {
    data = { measureUnit: 1 }
  } else if (unitType == UnitTypeEnum.pricingUnit) {
    data = { pricingUnit: 1 }
  }
  return http.post<PriceTypeModel[]>(apiPreFix.CTP_PORTAL + '/pricingType/query', data)
}
