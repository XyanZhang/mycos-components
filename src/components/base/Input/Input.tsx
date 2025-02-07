import { StyledInput, StyledErrorText } from '../../../theme/styled';

export interface InputProps {
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
  return (
    <div>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        error={!!error}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </div>
  );
}; 