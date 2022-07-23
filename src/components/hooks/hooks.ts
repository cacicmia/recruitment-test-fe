import { useEffect, useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
interface IAxiosProps {
  axiosInstance: AxiosInstance
  method: Method | string
  url: string
  requestConfig?: AxiosRequestConfig
}
export const useAxios = (configObject: any) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObject
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        setLoading(true)
        const res: AxiosResponse = await axiosInstance[method.toLowerCase()](url, {
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
