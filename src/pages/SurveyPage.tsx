import { useAxios } from '../components/hooks/hooks'
import { ErrorMessage } from '../shared/ErrorMessage'
import { Layout } from '../shared/Layout'
import { Loader } from '../shared/Loader'
import { SurveyForm } from './SurveyForm'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../shared/axios'
import { ErrorContainer } from '../shared/ErrorContainer'

export const titleStyle = css`
  ${tw`my-4 text-center font-semibold font-size[large]`}
`
export const SurveyPage = () => {
  let navigate = useNavigate()
  const { data, errors, loading } = useAxios({ url: '/' })
  if (loading) {
    return <Loader />
  }
  if (errors || !data) {
    return <ErrorContainer errors={errors?.errors} />
  }

  const { questions, title, description, id } = data!
  const sendSurveyAnswers = async (data: any) => {
    const response = await axiosInstance.post(`/${id}/answers`, {
      data
    })
    // @ts-ignore
    const { answers } = response
    navigate('/survey-success', { state: { answers, questions } })
  }
  return (
    <Layout>
      <div tw="flex flex-col">
        <h1 css={titleStyle}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        {data && <SurveyForm questions={questions} onSubmit={sendSurveyAnswers} errors={errors} />}
      </div>
    </Layout>
  )
}
