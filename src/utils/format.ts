import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

/** 格式化UTC日期 */
export function utcToDateTimeFormat(utcDate: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcDate).utcOffset(8).format(format)
}

/** 格式化日期 */
export const formatDate = (date: dayjs.ConfigType, format = DATE_FORMAT) =>
  dayjs(date).format(format)

/** 千分位格式化 */
export const formatMoney = (num: number | string) => {
  if (isNaN(Number(num))) {
    return ''
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
