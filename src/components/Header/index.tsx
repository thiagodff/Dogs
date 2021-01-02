import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'

import { Container, Nav } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </Nav>
    </Container>
  )
}

export default Header
