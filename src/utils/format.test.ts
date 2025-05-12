import { describe, test, expect } from 'vitest'
import { utcToDateTimeFormat, formatDate } from './format'

describe('日期格式化函数测试', () => {
  test('utcToDateTimeFormat 函数测试', () => {
    const utcDate = '2024-03-20T10:00:00Z'
    const result = utcToDateTimeFormat(utcDate)
    expect(result).toBe('2024-03-20 18:00:00') // UTC+8 时区转换

    // 测试自定义格式
    const customFormat = utcToDateTimeFormat(utcDate, 'YYYY年MM月DD日 HH:mm')
    expect(customFormat).toBe('2024年03月20日 18:00')
  })

  test('formatDate 函数测试', () => {
    const date = '2024-03-20'
    const result = formatDate(date)
    expect(result).toBe('2024-03-20')

    // 测试自定义格式
    const customFormat = formatDate(date, 'YYYY年MM月DD日')
    expect(customFormat).toBe('2024年03月20日')

    // 测试 Date 对象
    const dateObj = new Date('2024-03-20')
    const dateObjResult = formatDate(dateObj)
    expect(dateObjResult).toBe('2024-03-20')
  })
})
