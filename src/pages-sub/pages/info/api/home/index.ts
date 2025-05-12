import type { TestRes } from './types'
import { http } from '@/service/http'

export const getTestData = () => {
  return http.post<TestRes>('/gateway/ctp-portal/content/category/list', {
    bussCategory: '20',
    callAlias: 'rule',
  })
}
