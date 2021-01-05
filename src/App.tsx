import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

import AppProvider from './hooks/context'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
