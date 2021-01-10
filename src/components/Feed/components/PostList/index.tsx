import React, { useEffect } from 'react'

import { PHOTOS_GET } from '../../../../services/api'

import useFetch from '../../../../hooks/fetch'

import Error from '../../../Error'
import PostItem from '../PostItem'
import Loading from '../../../Loading'

import { Container } from './styles'

const Posts: React.FC = () => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function loadPosts() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })

      const { response, responseJson } = await request({ url, options })
      console.log(response)
      console.log(responseJson)
    }

    loadPosts()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data instanceof Array && data.length > 0) {
    return (
      <Container className="anime-left">
        {data.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </Container>
    )
  }
  return (
    <Container>
      <h1>Nenhum post encontrado, volta mais tarde</h1>
    </Container>
  )
}

export default Posts