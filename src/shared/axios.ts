import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
export interface IAxiosProps {
  url: string
  requestConfig?: AxiosRequestConfig
  payload?: any
}
import { deserialize } from 'json-api-deserialize'

const baseUrl = process.env.REACT_APP_BACKEND_URL! || 'http://localhost:4000/api/v1/survey'
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/vnd.api+json'
  }
})

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('interceptor', response)
    return {
      ...response,
      ...deserialize(response.data)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
