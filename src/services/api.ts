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

interface IPhotosGet {
  page: number
  total: number
  user: number
}

interface IDatComment {
  comment: string
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

export function PHOTO_POST(formData: FormData, token: string): IFetchData {
  return {
    url: API_BASE_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }
  }
}

export function PHOTOS_GET({ page, total, user }: IPhotosGet): IFetchData {
  return {
    url: `${API_BASE_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function PHOTO_GET(id: string): IFetchData {
  return {
    url: `${API_BASE_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function COMMENT_POST(
  id: number,
  token: string,
  body: IDatComment
): IFetchData {
  return {
    url: `${API_BASE_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_DELETE(id: number): IFetchData {
  return {
    url: `${API_BASE_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@Dogs:token')}`
      }
    }
  }
}
