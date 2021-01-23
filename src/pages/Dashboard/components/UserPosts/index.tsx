import React from 'react'

import { useAuth } from '../../../../hooks/context/auth'

import Head from '../../../../components/Head'
import Feed from '../../../../components/Feed'

import { Container } from './styles'

const UserPosts: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Head title="Minha conta" />

      <Feed user={user.id} />
    </Container>
  )
}

export default UserPosts
