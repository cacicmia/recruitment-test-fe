import { axiosInstance } from '../axiosInstance'
import { useAxios } from '../components/hooks/hooks'
import { ErrorMessage } from '../shared/ErrorMessage'
import { Loader } from '../shared/Loader'

export const SurveyPage = () => {
  const { data, error, loading } = useAxios({ axiosInstance, method: 'get', url: '/' })
  if (error) {
    return <ErrorMessage message={error.message} />
  }
  if (loading) {
    return <Loader />
  }
  return <p>here you are</p>
}
