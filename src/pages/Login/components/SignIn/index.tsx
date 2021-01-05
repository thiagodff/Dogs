import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../../../hooks/form'
import { useAuth } from '../../../../hooks/context/auth'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Error from '../../../../components/Error'

import { Container, NewAccountLink } from './styles'

const SignIn: React.FC = () => {
  const username = useForm()
  const password = useForm()

  const { signIn, error, loading } = useAuth()

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
    <Container className="anime-left">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />

        <Input label="Senha" name="password" type="password" {...password} />

        {loading ? (
          <Button disabled type="submit">
            Carregando...
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        <Error error={error} />
      </form>

      <Link to="/login/esqueci-minha-senha">Perdeu a Senha?</Link>

      <NewAccountLink>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/cadastrar">Cadastro</Link>
      </NewAccountLink>
    </Container>
  )
}

export default SignIn
