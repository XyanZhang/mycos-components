import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import type { Theme } from './theme'
import { defaultTheme } from './theme'

const ThemeContext = createContext<Theme>(defaultTheme)

interface ThemeProviderProps {
  theme?: Theme
  children: ReactNode
}

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return theme
}
