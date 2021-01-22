import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/fetch'

import { PHOTO_GET } from '../../services/api'

import Error from '../Error'
import Loading from '../Loading'
import PostContent from './components/PostContent'

import { Container } from './styles'

const Post: React.FC = () => {
  const { id } = useParams()
  const { error, data, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request({ url, options })
  }, [id, request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (Object.keys(data).length > 0) {
    return (
      <Container className="container main-container">
        <PostContent data={data} />
      </Container>
    )
  }
  return null
}

export default Post
