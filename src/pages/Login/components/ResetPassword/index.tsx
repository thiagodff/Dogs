import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useFetch from '../../../../hooks/fetch'
import useForm from '../../../../hooks/form'

import { RESET_PASSWORD } from '../../../../services/api'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Error from '../../../../components/Error'

const ResetPassword: React.FC = () => {
  const password = useForm('password')
  const { error, loading, request } = useFetch()

  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const key = params.get('key')
    const login = params.get('login')

    if (key && login) {
      setKey(key)
      setLogin(login)
    }
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!password.validate()) return

    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password.value
    })
    const { response } = await request({ url, options })

    if (response.ok) navigate('/login')
  }

  return (
    <h1>
      <h1 className="title">Resete a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />

        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      <Error error={error} />
    </h1>
  )
}

export default ResetPassword
