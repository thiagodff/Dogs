import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../hooks/context/auth'
import Image from '../../../Image'
import PostComments from '../PostComments'
import PostDelete from '../PostDelete'

import { Container, PostDetails } from './styles'

interface DataProps {
  [key: string]: string
}

interface PostContentProps {
  data: DataProps | DataProps[]
}

interface PhotosProps {
  acessos: number
  author: string
  date: string
  id: number
  idade: string
  peso: string
  src: string
  title: string
  total_comments: string
}

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

interface IDataPost {
  photo: PhotosProps
  comments: CommentsProps[]
}

const PostContent: React.FC<PostContentProps> = ({ data }) => {
  const { user } = useAuth()
  const { photo, comments } = (data as unknown) as IDataPost

  return (
    <Container>
      <div className="img">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <PostDetails className="details">
        <div>
          <p className="author">
            {user && user.username === photo.author ? (
              <PostDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className="visualizations">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {Number(photo.idade) > 1 ? 'anos' : 'ano'}
            </li>
          </ul>
        </div>
      </PostDetails>
      <PostComments id={photo.id} comments={comments} />
    </Container>
  )
}

export default PostContent
