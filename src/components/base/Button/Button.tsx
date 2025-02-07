import { useTheme } from '../../../theme/ThemeContext';

interface ButtonProps {
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
  const { colors } = useTheme();
  
  const baseStyles = 'rounded font-semibold transition-colors';
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const getVariantStyles = () => {
    if (disabled) {
      return primary 
        ? `bg-${colors.text.disabled} text-${colors.background.default}` 
        : `bg-${colors.background.paper} text-${colors.text.disabled}`;
    }
    return primary 
      ? `bg-${colors.primary.main} text-${colors.primary.contrastText} hover:bg-${colors.primary.dark}` 
      : `bg-${colors.background.paper} text-${colors.text.primary} hover:bg-${colors.background.default} border border-${colors.border.main} hover:border-${colors.border.hover}`;
  };
  
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${getVariantStyles()}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: primary ? colors.primary.main : colors.background.paper,
        color: primary ? colors.primary.contrastText : colors.text.primary,
        borderColor: primary ? 'transparent' : colors.border.main,
      }}
    >
      {label}
    </button>
  );
}; 