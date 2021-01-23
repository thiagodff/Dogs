import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { PHOTO_POST } from '../../../../services/api'

import useForm from '../../../../hooks/form'
import useFetch from '../../../../hooks/fetch'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Error from '../../../../components/Error'

import { Container, ImagePreviewWrapper } from './styles'
import { useNavigate } from 'react-router-dom'
import Head from '../../../../components/Head'

interface IUploadImage {
  preview: string
  raw: File
}

const CreatePost: React.FC = () => {
  const [img, setImg] = useState<IUploadImage>({} as IUploadImage)
  const name = useForm()
  const weight = useForm('number')
  const age = useForm('number')

  const { data, error, loading, request } = useFetch()

  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      navigate('/conta')
    }
  }, [data, navigate])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)

    const token = localStorage.getItem('@Dogs:token')
    if (token) {
      const { url, options } = PHOTO_POST(formData, token)
      request({ url, options })
    }
  }

  function handleUploadImage({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0]
      })
    }
  }

  return (
    <Container className="anime-left">
      <Head title="Poste sua foto" />

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          type="file"
          className="img-upload"
          name="img"
          id="img"
          onChange={handleUploadImage}
        />

        {loading ? (
          <Button type="submit" disabled>
            Enviando...
          </Button>
        ) : (
          <Button type="submit">Enviar</Button>
        )}
        <Error error={error} />
      </form>

      <ImagePreviewWrapper imgPreview={img.preview}>
        {img.preview && <div className="image-preview"></div>}
      </ImagePreviewWrapper>
    </Container>
  )
}

export default CreatePost
