import React from 'react'

import { Container } from './styles'

interface IError {
  error: string | null
}

const Error: React.FC<IError> = ({ error }) => {
  if (!error) return null
  return <Container>{error}</Container>
}

export default Error
