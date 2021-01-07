import React, { FormEvent } from 'react'

import { useAuth } from '../../../../hooks/context/auth'
import useFetch from '../../../../hooks/fetch'
import useForm from '../../../../hooks/form'

import { USER_POST } from '../../../../services/api'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Error from '../../../../components/Error'

import { Container } from './styles'

const SignUp: React.FC = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const { signIn } = useAuth()
  const { loading, error, request } = useFetch()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })

    if (username.validate() && password.validate()) {
      const { response } = await request({ url, options })

      if (response.ok) {
        signIn({
          username: username.value,
          password: password.value
        })
      }
    }
  }

  return (
    <Container className="anime-left">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={error} />
      </form>
    </Container>
  )
}

export default SignUp
