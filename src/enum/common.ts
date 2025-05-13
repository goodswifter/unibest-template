/**
 * 单位类型
 * @value 10: 计价单位 20: 计量单位 30: 计价+计量
 */
export enum UnitTypeEnum {
  /** 计价单位 */
  PRICING = 10,
  /** 计量单位 */
  MEASURE = 20,
  /** 计量单位和计价单位 */
  MEASURE_AND_PRICING = 30,
}
