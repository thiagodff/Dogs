import React from 'react'

import PostModal from './components/PostModal'
import PostList from './components/PostList'

import { Container } from './styles'

const Feed: React.FC = () => {
  return (
    <Container>
      <PostModal />
      <PostList />
    </Container>
  )
}

export default Feed
