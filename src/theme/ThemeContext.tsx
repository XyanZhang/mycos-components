import { createContext, useContext, ReactNode } from 'react';
import { Theme, defaultTheme } from './theme';

const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}; 