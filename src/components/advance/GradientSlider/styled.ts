import styled from '@emotion/styled'
import type { Theme } from '../../../theme/theme'

export const StyledSlider = styled.div<{
  theme: Theme
  disabled?: boolean
}>`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 4px 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  touch-action: none;
`

export const StyledRail = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  opacity: 0.3;
`

export const StyledTrack = styled.div`
  position: absolute;
  height: 4px;
  border-radius: 2px;
  transition: width 0.3s ease;
`

export const StyledHandle = styled.div<{
  theme: Theme
  disabled?: boolean
  isDragging?: boolean
}>`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 2px solid;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grab')};
  top: 2px;

  ${({ isDragging }) =>
    isDragging &&
    `
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
  `}

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  &:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
  }
`

export const StyledMark = styled.span`
  position: absolute;
  transform: translateX(-50%);
  font-size: 12px;
  margin-top: 20px;
  white-space: nowrap;
  transition: color 0.3s;
`

export const StyledValue = styled.span`
  position: absolute;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 500;
  margin-top: -25px;
  white-space: nowrap;
  transition: color 0.3s;
`
