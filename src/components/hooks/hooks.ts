import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { IAxiosProps, axiosInstance } from '../../shared/axios'
export const useAxios = (configObject: IAxiosProps) => {
  const { url, requestConfig = {} } = configObject
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<null | any>(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        setLoading(true)
        setErrors(null)
        const res: AxiosResponse = await axiosInstance.get(url, {
          ...requestConfig,
          signal: controller.signal
        })
        setData(res.data)
      } catch (err: any) {
        setErrors(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  return { data, errors, loading }
}
