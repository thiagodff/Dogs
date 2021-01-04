export const API_BASE_URL = 'https://dogsapi.origamid.dev/json'

interface IFetchData {
  url: string
  options: RequestInit
}

interface IBody {
  [key: string]: string
}

export function TOKEN_POST(body: IBody): IFetchData {
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
