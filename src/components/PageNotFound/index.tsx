import React from 'react'

import { Container } from './styles'

const PageNotFound: React.FC = () => {
  return (
    <Container className="container main-container">
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </Container>
  )
}

export default PageNotFound
