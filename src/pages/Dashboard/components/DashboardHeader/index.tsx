import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashboardHeaderNav from '../DashboardHeaderNav'

import { Container } from './styles'

interface IDashboardHeaderPathToTitle {
  [key: string]: string
}

const dashboardHeaderPathToTitle = {
  '/conta': 'Minhas Fotos',
  '/conta/estatisticas': 'Estatísticas',
  '/conta/postar': 'Poste Sua Foto'
} as IDashboardHeaderPathToTitle

const DashboardHeader: React.FC = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const actualPath = location.pathname
    const pageTitle = dashboardHeaderPathToTitle[actualPath]
    setTitle(pageTitle)
  }, [location])

  return (
    <Container>
      <h1 className="title">{title}</h1>
      <DashboardHeaderNav />
    </Container>
  )
}

export default DashboardHeader
