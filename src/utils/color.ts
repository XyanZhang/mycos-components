/**
 * 将十六进制颜色转换为 RGB 对象
 */
export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * 将 RGB 对象转换为十六进制颜色
 */
export const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * 根据百分比计算两个颜色之间的渐变颜色
 */
export const getGradientColor = (startColor: string, endColor: string, percent: number) => {
  const start = hexToRgb(startColor)
  const end = hexToRgb(endColor)

  if (!start || !end) return startColor

  const r = Math.round(start.r + (end.r - start.r) * percent)
  const g = Math.round(start.g + (end.g - start.g) * percent)
  const b = Math.round(start.b + (end.b - start.b) * percent)

  return rgbToHex(r, g, b)
}
