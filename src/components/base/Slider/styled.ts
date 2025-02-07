import styled from '@emotion/styled'
import type { Theme } from '../../../theme/theme'

export const StyledSlider = styled.div<{
  theme: Theme
  disabled?: boolean
}>`
  position: relative;
  width: 100%;
  height: 12px;
  margin: 10px 0;
  padding: 4px 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  touch-action: none;
`

export const StyledRail = styled.div<{ theme: Theme }>`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: 2px;
`

export const StyledTrack = styled.div<{ theme: Theme }>`
  position: absolute;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 2px;
  transition: background-color 0.3s;
`

export const StyledHandle = styled.div<{
  theme: Theme
  disabled?: boolean
}>`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 2px solid ${({ theme, disabled }) =>
    disabled ? theme.colors.text.disabled : theme.colors.primary.main};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grab')};

  &:hover {
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.text.disabled : theme.colors.primary.dark};
  }

  &:active {
    cursor: grabbing;
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.text.disabled : theme.colors.primary.dark};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.primary.light}40;
  }
`

export const StyledMark = styled.span<{ theme: Theme }>`
  position: absolute;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  margin-top: 10px;
  white-space: nowrap;
`
