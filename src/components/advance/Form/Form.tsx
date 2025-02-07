import { ReactNode } from 'react';
import { Button } from '../../base/Button/Button';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  submitText?: string;
  loading?: boolean;
}

export const Form = ({
  children,
  onSubmit,
  submitText = '提交',
  loading = false
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {children}
      <div className="flex justify-end">
        <Button
          label={loading ? '提交中...' : submitText}
          primary
          disabled={loading}
        />
      </div>
    </form>
  );
}; 