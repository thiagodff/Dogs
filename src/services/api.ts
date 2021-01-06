export const API_BASE_URL = 'https://dogsapi.origamid.dev/json'

interface IFetchData {
  url: string
  options: RequestInit
}

interface IAuthenticateUser {
  username: string
  password: string
}

interface ICreateUser {
  username: string
  email: string
  password: string
}

export function TOKEN_POST(body: IAuthenticateUser): IFetchData {
  return {
    url: API_BASE_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token: string): IFetchData {
  return {
    url: API_BASE_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export function USER_GET(token: string): IFetchData {
  return {
    url: API_BASE_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export function USER_POST(body: ICreateUser): IFetchData {
  return {
    url: API_BASE_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}
