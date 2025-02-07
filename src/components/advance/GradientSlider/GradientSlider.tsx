import React, { useRef, useState, useCallback, useEffect } from 'react'
import type { CSSProperties } from 'react'
import {
  StyledSlider,
  StyledRail,
  StyledTrack,
  StyledHandle,
  StyledMark,
  StyledValue,
} from './styled'
import { getGradientColor } from '../../../utils/color'

export interface GradientSliderProps {
  /** 当前值 */
  value?: number
  /** 默认值 */
  defaultValue?: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 刻度标记 */
  marks?: Record<number, React.ReactNode>
  /** 开始颜色 */
  startColor?: string
  /** 结束颜色 */
  endColor?: string
  /** 是否显示当前值 */
  showValue?: boolean
  /** 值改变时的回调 */
  onChange?: (value: number) => void
  /** 拖动结束时的回调 */
  onAfterChange?: (value: number) => void
  /** 样式 */
  style?: CSSProperties
  /** 类名 */
  className?: string
}

export const GradientSlider: React.FC<GradientSliderProps> = ({
  value: propValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  marks,
  startColor = '#1976d2',
  endColor = '#4caf50',
  showValue = true,
  onChange,
  onAfterChange,
  style,
  className,
}) => {
  // 内部值状态
  const [value, setValue] = useState(propValue ?? defaultValue)
  const [isDragging, setIsDragging] = useState(false)

  // refs
  const sliderRef = useRef<HTMLDivElement>(null)

  // 当 propValue 改变时更新内部值
  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue)
    }
  }, [propValue])

  // 计算百分比
  const getPercent = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100
  }, [min, max])

  // 获取当前渐变颜色
  const getCurrentColor = useCallback((val: number) => {
    const percent = (val - min) / (max - min)
    return getGradientColor(startColor, endColor, percent)
  }, [min, max, startColor, endColor])

  // 计算值
  const calculateValue = useCallback((position: number) => {
    const sliderRect = sliderRef.current?.getBoundingClientRect()
    if (!sliderRect) return value

    const percent = (position - sliderRect.left) / sliderRect.width
    let newValue = min + percent * (max - min)

    // 应用步长
    newValue = Math.round(newValue / step) * step

    // 限制范围
    newValue = Math.max(min, Math.min(max, newValue))

    return newValue
  }, [min, max, step, value])

  // 处理鼠标按下
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return

    setIsDragging(true)
    const newValue = calculateValue(e.clientX)
    setValue(newValue)
    onChange?.(newValue)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [calculateValue, disabled, onChange])

  // 处理鼠标移动
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return

    const newValue = calculateValue(e.clientX)
    setValue(newValue)
    onChange?.(newValue)
  }, [calculateValue, isDragging, onChange])

  // 处理鼠标松开
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      onAfterChange?.(value)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, onAfterChange, value, handleMouseMove])

  // 渲染刻度标记
  const renderMarks = () => {
    if (!marks) return null

    return Object.entries(marks).map(([markValue, label]) => {
      const percent = getPercent(Number(markValue))
      const color = getCurrentColor(Number(markValue))
      return (
        <StyledMark
          key={markValue}
          style={{ left: `${percent}%`, color }}
          data-value={markValue}
        >
          {label}
        </StyledMark>
      )
    })
  }

  const percent = getPercent(value)
  const currentColor = getCurrentColor(value)

  return (
    <StyledSlider
      ref={sliderRef}
      className={className}
      style={style}
      disabled={disabled}
      onMouseDown={handleMouseDown}
    >
      <StyledRail
        style={{
          background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        }}
      />
      <StyledTrack
        style={{
          width: `${percent}%`,
          background: `linear-gradient(to right, ${startColor}, ${currentColor})`,
        }}
      />
      <StyledHandle
        style={{
          left: `${percent}%`,
          borderColor: currentColor,
          backgroundColor: currentColor,
        }}
        disabled={disabled}
        isDragging={isDragging}
      />
      {showValue && (
        <StyledValue
          style={{
            left: `${percent}%`,
            color: currentColor,
          }}
        >
          {value}
        </StyledValue>
      )}
      {renderMarks()}
    </StyledSlider>
  )
}
