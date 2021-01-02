import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import useForm from '../../../../hooks/form'

import { Container } from './styles'

const SignIn: React.FC = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => {
          console.log(response)
          return response.json
        })
        .then(json => console.log(json))
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
