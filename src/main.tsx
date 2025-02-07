import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './theme/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div>My Component Library</div>
    </ThemeProvider>
  </React.StrictMode>,
)
