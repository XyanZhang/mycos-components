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
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          px-3 py-2 border rounded outline-none transition-colors
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100' : 'bg-white'}
          focus:border-blue-500
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}; 