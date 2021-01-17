import React from 'react'
import Feed from '../../../../components/Feed'

import { Container } from './styles'

const UserPosts: React.FC = () => {
  return (
    <Container>
      <Feed isPrivate />
    </Container>
  )
}

export default UserPosts
