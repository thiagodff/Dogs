import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { useAuth } from '../../../../hooks/context/auth'
import useMedia from '../../../../hooks/media'

import { ReactComponent as MyPhotos } from '../../../../assets/feed.svg'
import { ReactComponent as Statistics } from '../../../../assets/statistics.svg'
import { ReactComponent as NewPost } from '../../../../assets/add.svg'
import { ReactComponent as Logout } from '../../../../assets/logout.svg'

import { Container, MenuMobileButton } from './styles'

const DashboardHeaderNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobileScreen = useMedia('(max-width: 40rem)')
  const { signOut } = useAuth()

  const { pathname } = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {isMobileScreen && (
        <MenuMobileButton
          aria-label="Menu"
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
        ></MenuMobileButton>
      )}
      <Container
        isMobileScreen={isMobileScreen}
        isMobileMenuOpen={isMobileMenuOpen}
      >
        <NavLink to="/conta" end>
          <MyPhotos />
          {isMobileScreen && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Statistics />
          {isMobileScreen && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <NewPost />
          {isMobileScreen && 'Adicionar Foto'}
        </NavLink>

        <button onClick={signOut}>
          <Logout />
          {isMobileScreen && 'Sair'}
        </button>
      </Container>
    </>
  )
}

export default DashboardHeaderNav
