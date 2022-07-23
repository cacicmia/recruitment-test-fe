import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL! || 'http://localhost:4000/api/v1/survey'
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})
