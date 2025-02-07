import { StyledButton } from '../../../theme/styled';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ 
  primary = false, 
  size = 'medium', 
  label, 
  onClick, 
  disabled = false 
}: ButtonProps) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}; 