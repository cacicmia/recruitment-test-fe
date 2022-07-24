import { useEffect, useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
interface IAxiosProps {
  url: string
  requestConfig?: AxiosRequestConfig
  payload?: any
}

const baseUrl = process.env.REACT_APP_BACKEND_URL! || 'http://localhost:4000/api/v1/survey'
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})
export const useAxios = (configObject: IAxiosProps) => {
  const { url, requestConfig = {} } = configObject
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        setLoading(true)
        //@ts-ignore TODO
        const res: AxiosResponse = await axiosInstance.get(url, {
          ...requestConfig,
          signal: controller.signal
        })
        setData(res.data.data)
      } catch (err) {
        //@ts-ignore TODO
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  return { data, error, loading }
}
