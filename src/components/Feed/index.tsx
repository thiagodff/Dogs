import React, { useState } from 'react'

import PostModal from './components/PostModal'
import PostList from './components/PostList'

import { Container } from './styles'

const Feed: React.FC = () => {
  const [modalPost, setModalPost] = useState({})

  return (
    <Container>
      {Object.keys(modalPost).length > 0 && (
        <PostModal post={modalPost} setModalPost={setModalPost} />
      )}
      <PostList setModalPost={setModalPost} />
    </Container>
  )
}

export default Feed
