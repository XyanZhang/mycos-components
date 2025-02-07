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
  const baseStyles = 'rounded font-semibold transition-colors';
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };
  const variantStyles = primary 
    ? 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300' 
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100';
  
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}; 