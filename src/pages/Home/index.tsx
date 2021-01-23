import React from 'react'
import Feed from '../../components/Feed'
import Head from '../../components/Head'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container className="container main-container">
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos" />
      <Feed />
    </Container>
  )
}

export default Home
