import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export function utcToDateTimeFormat(utcDate: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcDate).utcOffset(8).format(format)
}

export const formatDate = (date: dayjs.ConfigType, format = DATE_FORMAT) =>
  dayjs(date).format(format)
