import React, { useEffect, MouseEvent } from 'react'

import useFetch from '../../../../hooks/fetch'

import { PHOTO_GET } from '../../../../services/api'
import Error from '../../../Error'
import Loading from '../../../Loading'
import PostContent from '../../../Post/components/PostContent'

import { Container } from './styles'

interface PostProps {
  [key: string]: string
}

interface PostModalProps {
  post: PostProps
  setModalPost(post: PostProps): void
}

const PostModal: React.FC<PostModalProps> = ({ post, setModalPost }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(post.id)
    request({ url, options })
  }, [post, request])

  function handleOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setModalPost({})
    }
  }

  return (
    <Container onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {Object.keys(data).length > 0 && <PostContent data={data} />}
    </Container>
  )
}

export default PostModal
