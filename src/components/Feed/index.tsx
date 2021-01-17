import React, { useEffect, useState } from 'react'

import PostModal from './components/PostModal'
import PostList from './components/PostList'

import { Container } from './styles'

interface FeedProps {
  isPrivate?: boolean
}

const Feed: React.FC<FeedProps> = ({ isPrivate = false }) => {
  const [modalPost, setModalPost] = useState({})
  const [pages, setPages] = useState([1])
  const [endOfPosts, setEndOfPosts] = useState(false)
  const [loadingPosts, setLoadingPosts] = useState(false)

  useEffect(() => {
    function infiniteScroll() {
      if (endOfPosts) return

      const scrollPosition = window.scrollY
      const pageHeight = document.body.offsetHeight - window.innerHeight

      if (scrollPosition > pageHeight * 0.75 && !loadingPosts) {
        setPages(pages => [...pages, pages.length + 1])
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [endOfPosts, loadingPosts])

  return (
    <Container>
      {Object.keys(modalPost).length > 0 && (
        <PostModal post={modalPost} setModalPost={setModalPost} />
      )}
      {pages.map(page => (
        <PostList
          key={page}
          page={page}
          isPrivate={isPrivate}
          setModalPost={setModalPost}
          setEndOfPosts={setEndOfPosts}
          setLoadingPosts={setLoadingPosts}
        />
      ))}
    </Container>
  )
}

export default Feed
