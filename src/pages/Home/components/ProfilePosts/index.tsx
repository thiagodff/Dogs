import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../../../components/Feed'

import { Container } from './styles'

const ProfilePosts: React.FC = () => {
  const { user } = useParams()

  return (
    <Container className="container main-container">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </Container>
  )
}

export default ProfilePosts
