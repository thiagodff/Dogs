import React from 'react'
import Feed from '../../components/Feed'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container className="container main-container">
      <Feed />
    </Container>
  )
}

export default Home
