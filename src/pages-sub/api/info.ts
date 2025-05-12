import { http } from '@/service/http'

import { MenuCategoryListModel, MenuCategoryListReq } from './types'
// 查询资讯分类
export const findInformationCategory = (data: MenuCategoryListReq) => {
  return http.post<MenuCategoryListModel[]>({
    url: `/content/category/list`,
    data,
  })
}
