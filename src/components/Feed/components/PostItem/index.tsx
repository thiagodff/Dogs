import React from 'react'

import { Container } from './styles'

interface PostProps {
  [key: string]: string
}

interface PostItemProps {
  post: PostProps
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Container>
      <img src={post.src} alt={post.title} />
      <span className="visualizations">{post.acessos}</span>
    </Container>
  )
}

export default PostItem
