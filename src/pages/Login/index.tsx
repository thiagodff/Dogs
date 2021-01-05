import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'

import { Container } from './styles'
import { useAuth } from '../../hooks/context/auth'

const Login: React.FC = () => {
  const { isSigned } = useAuth()

  if (isSigned) return <Navigate to="/conta" />
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="cadastrar" element={<SignUp />} />
        <Route path="esqueci-minha-senha" element={<ForgotPassword />} />
        <Route path="resetar-minha-senha" element={<ResetPassword />} />
      </Routes>
    </Container>
  )
}

export default Login
