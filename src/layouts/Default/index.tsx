import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Container } from './styles'

const DefaultLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default DefaultLayout
