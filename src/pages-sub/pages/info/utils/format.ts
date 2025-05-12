export const formatNumber = (num: number): string | number => {
  return num < 100 ? `00${num}` : num
}
