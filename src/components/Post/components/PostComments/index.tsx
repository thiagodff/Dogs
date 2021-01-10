import React from 'react'

import { Container } from './styles'

interface CommentsProps {
  comment_ID: string
  comment_agent: string
  comment_approved: string
  comment_author: string
  comment_author_IP: string
  comment_author_email: string
  comment_author_url: string
  comment_content: string
  comment_date: string
  comment_date_gmt: string
  comment_karma: string
  comment_parent: string
  comment_post_ID: string
  comment_type: string
  user_id: string
}

interface PostCommentsProps {
  id: number
  comments: CommentsProps[]
}

const PostComments: React.FC<PostCommentsProps> = ({ id, comments }) => {
  return (
    <Container>
      <h1>PostComments</h1>
    </Container>
  )
}

export default PostComments
