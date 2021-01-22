import React, { useEffect } from 'react'

import { PHOTOS_GET } from '../../../../services/api'

import useFetch from '../../../../hooks/fetch'

import Error from '../../../Error'
import PostItem from '../PostItem'
import Loading from '../../../Loading'

import { Container, ContainerNoPost } from './styles'

interface PostProps {
  [key: string]: string
}

interface PostListProps {
  setModalPost(post: PostProps): void
  setEndOfPosts(isEndOfPosts: boolean): void
  setLoadingPosts(loading: boolean): void
  page?: number
  userId?: number
}

const Posts: React.FC<PostListProps> = ({
  setModalPost,
  page = 1,
  userId = 0,
  setEndOfPosts,
  setLoadingPosts
}) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function loadPosts() {
      setLoadingPosts(true)

      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user: userId })

      const { response, responseJson } = await request({ url, options })

      if (
        response &&
        response.ok &&
        responseJson instanceof Array &&
        responseJson.length < total
      ) {
        setEndOfPosts(true)
      }

      setLoadingPosts(false)
    }

    loadPosts()
  }, [request, page, userId, setEndOfPosts, setLoadingPosts])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data instanceof Array && data.length > 0) {
    return (
      <Container className="anime-left">
        {data.map(post => (
          <PostItem key={post.id} post={post} setModalPost={setModalPost} />
        ))}
      </Container>
    )
  }
  return (
    <ContainerNoPost>
      <h1>Nenhum post encontrado.</h1>
    </ContainerNoPost>
  )
}

export default Posts
