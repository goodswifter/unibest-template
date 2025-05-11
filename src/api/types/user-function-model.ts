/*
 * 用户菜单
 */
export interface IUserFunctionItem {
  actionName: string
  appId: number
  enfuncName: string
  funcId: number
  funcName: string
  funcType: string
  hierarchy: number
  news: number
  parentId: number
  sortno: number
  styleName: string
  url: string
  createBy: any
  createDate: any
  modifyBy: any
  modifyDate: any
  ex: any
  item1: string
  item2: any
  item3: any
  item4: any
  permissionId: any
  exFlag: boolean
  sysType: string
  btnOperType: string
  userBaseId: any
  [pro: string]: any
}
