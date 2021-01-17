import React from 'react'
import Image from '../../../Image'

import { Container } from './styles'

interface PostProps {
  [key: string]: string
}

interface PostItemProps {
  post: PostProps
  setModalPost(post: PostProps): void
}

const PostItem: React.FC<PostItemProps> = ({ post, setModalPost }) => {
  return (
    <Container onClick={() => setModalPost(post)}>
      <Image src={post.src} alt={post.title} />
      <span className="visualizations">{post.acessos}</span>
    </Container>
  )
}

export default PostItem
