/**
 * 帮助中心左侧菜单模型
 */
export interface MenuCategoryListReq {
  /**
   * 业务大类 10资讯分类 20帮助中心 30公告 50关于我们
   */
  bussCategory?: string
  /**
   * 调用别名
   */
  callAlias?: string
  /**
   * 分类名称
   */
  categoryName?: string
  /**
   * 启用状态（0停用 1启用）
   */
  enableStatus?: number
  /**
   * 一级分类 传0
   */
  parentId?: number

  [property: string]: any
}

export interface MenuCategoryListModel {
  categoryId: number
  relSitId: number
  parentId: number
  ancestors: string
  categoryName: string
  bussCategory: string
  callAlias: string
  remark: string
  sortNumber: number
  enableStatus: number
  createdDate: string
  platformCode: string
  parentEnableStatus?: any
  children: MenuCategoryListModel[]
}
