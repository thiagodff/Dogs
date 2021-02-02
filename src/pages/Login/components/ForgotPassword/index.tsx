import React, { FormEvent } from 'react'

import useFetch from '../../../../hooks/fetch'
import useForm from '../../../../hooks/form'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Error from '../../../../components/Error'

import { FORGOT_PASSWORD } from '../../../../services/api'

import { Container } from './styles'
import Head from '../../../../components/Head'

const ForgotPassword: React.FC = () => {
  const credential = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!credential.validate()) return

    const { url, options } = FORGOT_PASSWORD({
      login: credential.value,
      url: window.location.href.replace(
        'esqueci-minha-senha',
        'resetar-minha-senha'
      )
    })
    await request({ url, options })
  }

  return (
    <Container className="anime-left">
      <Head title="Esqueci minha senha" />

      <h1 className="title">Perdeu a senha?</h1>

      {Object.keys(data).length > 0 ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / usuário"
            type="text"
            name="email"
            {...credential}
          />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </Container>
  )
}

export default ForgotPassword
