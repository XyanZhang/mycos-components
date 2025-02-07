import type { ReactNode } from 'react';
import { Button } from '../../base/Button/Button';
import { StyledForm, StyledFormFooter } from '../../../theme/styled';

export interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  submitText?: string;
  loading?: boolean;
}

export const Form = ({
  children,
  onSubmit,
  submitText = '提交',
  loading = false,
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) {
      onSubmit(e);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {children}
      <StyledFormFooter>
        <Button
          label={loading ? '提交中...' : submitText}
          primary
          disabled={loading}
        />
      </StyledFormFooter>
    </StyledForm>
  );
};
