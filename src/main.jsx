import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts.css'
import { SearchProvider } from './components/SearchContext'
import { ThemeProvider } from './components/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
