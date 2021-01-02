import React, { InputHTMLAttributes } from 'react'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error: string
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  onBlur
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default Input
