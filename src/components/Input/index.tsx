import React, { InputHTMLAttributes } from 'react'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" {...rest} />
      <Error>Error</Error>
    </Container>
  )
}

export default Input
