import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'

import DashboardHeader from './components/DashboardHeader'
import Posts from './components/Posts'
import UserStatistics from './components/UserStatistics'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container className="container">
      <DashboardHeader />

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/postar" element={<CreatePost />} />
        <Route path="/estatisticas" element={<UserStatistics />} />
      </Routes>
    </Container>
  )
}

export default Dashboard
