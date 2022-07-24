import { axiosInstance } from '../axiosInstance'
import { useAxios } from '../components/hooks/hooks'
import { ErrorMessage } from '../shared/ErrorMessage'
import { Layout } from '../shared/Layout'
import { Loader } from '../shared/Loader'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'

const titleStyle = css`
  ${tw`my-4 text-center font-semibold font-size[large]`}
`
export const SurveyPage = () => {
  const { data, error, loading } = useAxios({ axiosInstance, method: 'get', url: '/' })

  if (loading) {
    return <Loader />
  }
  if (error || !data) {
    return <ErrorMessage message={error?.message || "Couldn't fetch form"} />
  }
  console.log(data)

  const {
    attributes: { questions, title, description }
  } = data!
  return (
    <Layout>
      <div tw="flex flex-col">
        <h1 css={titleStyle}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </Layout>
  )
}
