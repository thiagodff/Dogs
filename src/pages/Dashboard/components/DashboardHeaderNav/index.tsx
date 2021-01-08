import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../../hooks/context/auth'

import { ReactComponent as MyPhotos } from '../../../../assets/feed.svg'
import { ReactComponent as Statistics } from '../../../../assets/statistics.svg'
import { ReactComponent as NewPost } from '../../../../assets/add.svg'
import { ReactComponent as Logout } from '../../../../assets/logout.svg'

import { Container } from './styles'

const DashboardHeaderNav: React.FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  const { signOut } = useAuth()

  return (
    <Container>
      <NavLink to="/conta" end>
        <MyPhotos />
        {isMobileScreen && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Statistics />
        {isMobileScreen && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        {isMobileScreen && 'Adicionar Foto'}
        <NewPost />
      </NavLink>

      <button onClick={signOut}>
        <Logout />
        {isMobileScreen && 'Sair'}
      </button>
    </Container>
  )
}

export default DashboardHeaderNav
