import type React from 'react'
import { StyledButton } from '../../../theme/styled'

export interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const Button = ({
  primary = false,
  size = 'medium',
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
