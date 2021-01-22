import React from 'react'

import { useAuth } from '../../../../hooks/context/auth'

import Feed from '../../../../components/Feed'

import { Container } from './styles'

const UserPosts: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Feed userId={user.id} />
    </Container>
  )
}

export default UserPosts
