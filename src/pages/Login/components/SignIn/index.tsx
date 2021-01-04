import React, { FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { TOKEN_POST, USER_GET } from '../../../../services/api'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import useForm from '../../../../hooks/form'

import { Container } from './styles'

const SignIn: React.FC = () => {
  const username = useForm()
  const password = useForm()

  useEffect(() => {
    const token = localStorage.getItem('@Dogs:token')

    if (token) {
      getUser(token)
    }
  }, [])

  async function getUser(token: string) {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const responseJson = await response.json()

    console.log(responseJson)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options)
      const responseJson = await response.json()

      localStorage.setItem('@Dogs:token', responseJson.token)
      getUser(responseJson.token)
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
