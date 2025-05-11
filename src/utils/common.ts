import { commonApi } from '@/api'

/**
 * 根据值获取对象
 * @param value 值
 * @param options 选项
 * @returns 对象
 */
export const getOptionByValue = <T extends OptionModel>(
  options: T[],
  value: number | string,
): T | undefined => {
  return options.find(option => option.value == value)
}

/**
 * 获取下拉选项的label
 * @param obj {value: 1, label: '男'}
 * @param value 值
 */
export const getOptionsLabel = (options: any, value: string | number | undefined) => {
  if (options) {
    return options.find((item: any) => item.value == value)?.label || '无'
  }

  return '无'
}

/**
 * 获取单位精度
 * @param code 单位精度
 * @returns 单位精度
 */
export const getUnitPrecision = async (code: number | string) => {
  const { model } = await commonApi.getPriceTypes()
  const priceType = model?.find(item => item.pricingType == code)
  return priceType?.afterPoint ?? 0
}
