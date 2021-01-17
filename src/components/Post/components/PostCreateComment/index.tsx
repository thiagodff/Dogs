import React, { FormEvent, useState } from 'react'

import useFetch from '../../../../hooks/fetch'
import { COMMENT_POST } from '../../../../services/api'

import Error from '../../../Error'

import { ReactComponent as SendIcon } from '../../../../assets/send.svg'

import { Container, CommentField, SendButton } from './styles'

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

interface PostCreateCommentProps {
  id: number
  updateComments: React.Dispatch<React.SetStateAction<CommentsProps[]>>
}

const PostCreateComment: React.FC<PostCreateCommentProps> = ({
  id,
  updateComments
}) => {
  const { request, error } = useFetch()
  const [comment, setComment] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const token = localStorage.getItem('@Dogs:token')

    if (token) {
      const { options, url } = COMMENT_POST(id, token, { comment })

      const { response, responseJson } = await request({ options, url })
      const newComment = (responseJson as unknown) as CommentsProps

      if (response.ok) {
        setComment('')
        updateComments(comments => [...comments, newComment])
      }
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <CommentField
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <SendButton type="submit">
        <SendIcon />
      </SendButton>

      <Error error={error} />
    </Container>
  )
}

export default PostCreateComment
