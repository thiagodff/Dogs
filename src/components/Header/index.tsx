import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/context/auth'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'

import { Container, Nav } from './styles'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

  return (
    <Container>
      <Nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {user.nome ? (
          <Link className="login" to="/conta">
            {user.nome}
            <button onClick={signOut}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </Nav>
    </Container>
  )
}

export default Header
