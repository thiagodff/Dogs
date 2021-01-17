import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../../services/api'

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
  signOut(): void
  user: IUserState
  error: string | null
  loading: boolean
  isSigned: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IUserState>({} as IUserState)
  const [isSigned, setIsSigned] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const getUser = useCallback(async (token: string) => {
    const { url, options } = USER_GET(token)

    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('')

      const responseJson = await response.json()

      setData(responseJson)
      setIsSigned(true)
    } catch (error) {
      setData({} as IUserState)
      setIsSigned(false)
    }
  }, [])

  const signIn = useCallback(
    async ({ username, password }) => {
      try {
        setError(null)
        setLoading(true)

        const { url, options } = TOKEN_POST({ username, password })

        const response = await fetch(url, options)
        if (!response.ok) throw new Error('Error: Usuário inválido')

        const { token } = await response.json()

        localStorage.setItem('@Dogs:token', token)
        await getUser(token)

        navigate('/conta')
      } catch (err) {
        setError(err.message)
        setIsSigned(false)
      } finally {
        setLoading(false)
      }
    },
    [getUser, navigate]
  )

  const signOut = useCallback(() => {
    setData({} as IUserState)
    setError(null)
    setLoading(false)
    setIsSigned(false)

    localStorage.removeItem('@Dogs:token')

    navigate('/login')
  }, [navigate])

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem('@Dogs:token')

      if (token) {
        try {
          setError(null)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)

          if (!response.ok) throw new Error('Token inválido')

          await getUser(token)
        } catch (error) {
          signOut()
        } finally {
          setLoading(false)
        }
      } else {
        setIsSigned(false)
      }
    }

    verifyToken()
  }, [getUser, signOut])

  return (
    <AuthContext.Provider
      value={{ signIn, user: data, signOut, error, loading, isSigned }}
    >
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
