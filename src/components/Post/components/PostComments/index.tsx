import React, { useEffect, useRef, useState } from 'react'

import { useAuth } from '../../../../hooks/context/auth'

import PostCreateComment from '../PostCreateComment'

import { CommentList } from './styles'

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

const PostComments: React.FC<PostCommentsProps> = props => {
  const [comments, setComments] = useState(() => props.comments)
  const commentsList = useRef<HTMLUListElement>(null)
  const { isSigned } = useAuth()

  useEffect(() => {
    if (commentsList.current) {
      commentsList.current.scrollTop = commentsList.current.scrollHeight
    }
  }, [comments])

  return (
    <>
      <CommentList ref={commentsList}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentList>
      {isSigned && (
        <PostCreateComment id={props.id} updateComments={setComments} />
      )}
    </>
  )
}

export default PostComments
