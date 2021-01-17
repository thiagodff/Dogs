import React from 'react'
import useFetch from '../../../../hooks/fetch'
import { PHOTO_DELETE } from '../../../../services/api'

import { ButtonDelete } from './styles'

interface PostDeleteProps {
  id: number
}

const PostDelete: React.FC<PostDeleteProps> = ({ id }) => {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar esse post?')

    if (!confirm) return

    const { url, options } = PHOTO_DELETE(id)

    const { response } = await request({ url, options })

    if (response.ok) {
      window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Deletar</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Deletar</ButtonDelete>
      )}
    </>
  )
}

export default PostDelete
