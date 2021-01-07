import { useCallback, useState } from 'react'

interface IRequestData {
  url: string
  options: RequestInit
}

interface IFetchResponse {
  data: IResponseApi
  error: string
  loading: boolean
  request(data: IRequestData): Promise<IResponseData>
}

interface IResponseData {
  response: Response
  responseJson: IResponseApi
}

interface IResponseApi {
  [key: string]: string
}

const useFetch = (): IFetchResponse => {
  const [data, setData] = useState<IResponseApi>({} as IResponseApi)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const request = useCallback(
    async ({ url, options }: IRequestData): Promise<IResponseData> => {
      let response = {} as Response
      let responseJson = {} as IResponseApi
      try {
        setError('')
        setLoading(true)

        response = await fetch(url, options)
        responseJson = (await response.json()) as IResponseApi

        if (!response.ok) throw new Error(responseJson.message)
      } catch (err) {
        responseJson = {} as IResponseApi
        setError(err.message)
      } finally {
        setData(responseJson)
        setLoading(false)
      }
      return { response, responseJson }
    },
    []
  )

  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch
