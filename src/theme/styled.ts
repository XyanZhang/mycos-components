import styled from '@emotion/styled';
import { Theme } from './theme';

// 创建基础按钮样式
export const StyledButton = styled.button<{
  theme: Theme;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>`
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.2s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  ${props => {
    const { colors } = props.theme;
    const { primary, disabled } = props;

    if (disabled) {
      return `
        background-color: ${primary ? colors.text.disabled : colors.background.paper};
        color: ${primary ? colors.background.default : colors.text.disabled};
        border: 1px solid transparent;
      `;
    }

    return primary ? `
      background-color: ${colors.primary.main};
      color: ${colors.primary.contrastText};
      border: 1px solid transparent;
      &:hover {
        background-color: ${colors.primary.dark};
      }
    ` : `
      background-color: ${colors.background.paper};
      color: ${colors.text.primary};
      border: 1px solid ${colors.border.main};
      &:hover {
        border-color: ${colors.border.hover};
        background-color: ${colors.background.default};
      }
    `;
  }}

  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 4px 12px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 12px 24px;
          font-size: 18px;
        `;
      default:
        return `
          padding: 8px 16px;
          font-size: 16px;
        `;
    }
  }}
`;

// 创建输入框样式
export const StyledInput = styled.input<{
  theme: Theme;
  error?: boolean;
  disabled?: boolean;
}>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${props =>
    props.error
      ? props.theme.colors.error.main
      : props.theme.colors.border.main
  };
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.background.paper
      : props.theme.colors.background.default
  };
  color: ${props =>
    props.disabled
      ? props.theme.colors.text.disabled
      : props.theme.colors.text.primary
  };
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${props => props.theme.colors.primary.main};
  }
`;

export const StyledErrorText = styled.span<{ theme: Theme }>`
  color: ${props => props.theme.colors.error.main};
  font-size: 14px;
  margin-top: 4px;
`;

// 创建表单样式
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;
