import React, { createContext, useCallback, useContext, useState } from 'react'
import { TOKEN_POST, USER_GET } from '../../services/api'

interface IUserState {
  id: number
  username: string
  nome: string
  email: string
}

interface ISignInCredentials {
  username: string
  password: string
}

interface AuthContextData {
  signIn(credentials: ISignInCredentials): void
  user: IUserState
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IUserState>({} as IUserState)
  const [signed, setSigned] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUser = useCallback(async (token: string) => {
    const { url, options } = USER_GET(token)

    try {
      const response = await fetch(url, options)
      const responseJson = await response.json()

      setData(responseJson)
      setSigned(true)
    } catch (error) {
      setData({} as IUserState)
      setSigned(false)
    }
  }, [])

  const signIn = useCallback(async ({ username, password }) => {
    const { url, options } = TOKEN_POST({ username, password })

    const response = await fetch(url, options)
    const { token } = await response.json()

    localStorage.setItem('@Dogs:token', token)
    getUser(token)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
