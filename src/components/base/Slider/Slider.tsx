import React, { useRef, useState, useCallback } from 'react'
import type { CSSProperties } from 'react'
import { StyledSlider, StyledRail, StyledTrack, StyledHandle, StyledMark } from './styled'

export interface SliderProps {
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
  /** 值改变时的回调 */
  onChange?: (value: number) => void
  /** 样式 */
  style?: CSSProperties
  /** 类名 */
  className?: string
}

export const Slider: React.FC<SliderProps> = ({
  value: propValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  marks,
  onChange,
  style,
  className,
}) => {
  // 内部值状态
  const [value, setValue] = useState(propValue ?? defaultValue)

  // refs
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // 计算百分比
  const getPercent = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100
  }, [min, max])

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

    isDragging.current = true
    const newValue = calculateValue(e.clientX)
    setValue(newValue)
    onChange?.(newValue)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [calculateValue, disabled, onChange])

  // 处理鼠标移动
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return

    const newValue = calculateValue(e.clientX)
    setValue(newValue)
    onChange?.(newValue)
  }, [calculateValue, onChange])

  // 处理鼠标松开
  const handleMouseUp = useCallback(() => {
    isDragging.current = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove])

  // 渲染刻度标记
  const renderMarks = () => {
    if (!marks) return null

    return Object.entries(marks).map(([markValue, label]) => {
      const percent = getPercent(Number(markValue))
      return (
        <StyledMark
          key={markValue}
          style={{ left: `${percent}%` }}
          data-value={markValue}
        >
          {label}
        </StyledMark>
      )
    })
  }

  return (
    <StyledSlider
      ref={sliderRef}
      className={className}
      style={style}
      disabled={disabled}
      onMouseDown={handleMouseDown}
    >
      <StyledRail />
      <StyledTrack style={{ width: `${getPercent(value)}%` }} />
      <StyledHandle
        style={{ left: `${getPercent(value)}%` }}
        disabled={disabled}
      />
      {renderMarks()}
    </StyledSlider>
  )
}
