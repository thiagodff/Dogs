import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../../../hooks/form'
import { useAuth } from '../../../../hooks/context/auth'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'

import { Container } from './styles'

const SignIn: React.FC = () => {
  const username = useForm()
  const password = useForm()

  const { signIn } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      signIn({
        username: username.value,
        password: password.value
      })
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />

        <Input label="Senha" name="password" type="password" {...password} />

        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/cadastrar">Cadastro</Link>
    </Container>
  )
}

export default SignIn
