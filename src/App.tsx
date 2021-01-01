import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Olá mundo</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
