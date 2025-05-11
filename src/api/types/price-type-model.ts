export interface PriceTypeModel {
  /**
   * 小数点后位数
   */
  afterPoint: number
  /**
   * 小数点前位数
   */
  beforePoint: number
  /**
   * 创建时间
   */
  createdDate: string
  /**
   * 创建人id
   */
  creatorId: string
  /**
   * 删除标记0正常1删除
   */
  deleted: number
  /**
   * 启用状态:10启用 20停用
   */
  enableStatus: string
  /**
   * 固定值
   */
  fixedValue: string
  /**
   * 主键
   */
  id: number
  /**
   * 最大值
   */
  maxValue: string
  /**
   * 计量单位 0否 1是
   */
  measureUnit: number
  /**
   * 最小值
   */
  minValue: string
  /**
   * 平台编号
   */
  platformCode: string
  /**
   * 计价方式：10输入值 20固定值
   */
  pricingMethod: string
  /**
   * 计价类型编码
   */
  pricingType: number
  /**
   * 计价类型名称
   */
  pricingTypeName: string
  /**
   * 计价单位 0否1是
   */
  pricingUnit: number
  /**
   * 数量取值方式：10取重量 20取固定值 30取输入值
   */
  quantityValueMethod: string
  /**
   * 排序序号
   */
  sortNum: number
  /**
   * 单位类型10计价单位20计量单位30计价+计量
   */
  unitType: string
  /**
   * 最后更新时间
   */
  updatedDate: string
  /**
   * 最后更新人id
   */
  updaterId: string
  [property: string]: any
}
