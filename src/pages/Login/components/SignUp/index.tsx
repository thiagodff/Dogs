import React, { FormEvent } from 'react'

import { USER_POST } from '../../../../services/api'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import useForm from '../../../../hooks/form'

import { Container } from './styles'
import { useAuth } from '../../../../hooks/context/auth'

const SignUp: React.FC = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const { signIn } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      signIn({
        username: username.value,
        password: password.value
      })
    }
  }

  return (
    <Container className="anime-left">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Cadastrar</Button>
      </form>
    </Container>
  )
}

export default SignUp
