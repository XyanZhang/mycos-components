import { useTheme } from '../../../theme/ThemeContext';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false
}: InputProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        style={{
          backgroundColor: disabled ? colors.background.paper : colors.background.default,
          borderColor: error ? colors.error.main : colors.border.main,
          color: disabled ? colors.text.disabled : colors.text.primary,
          padding: '0.5rem 0.75rem',
          borderRadius: '0.25rem',
          borderWidth: '1px',
          borderStyle: 'solid',
          outline: 'none',
          transition: 'all 0.2s',
          '&:focus': {
            borderColor: colors.primary.main,
          },
        }}
      />
      {error && (
        <span style={{ color: colors.error.main, fontSize: '0.875rem' }}>
          {error}
        </span>
      )}
    </div>
  );
}; 