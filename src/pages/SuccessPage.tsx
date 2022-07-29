/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { useLocation } from 'react-router-dom'
import { Layout } from '../shared/Layout'
import { titleStyle } from './SurveyPage'
import { SurveyForm } from './SurveyForm'
import { Question } from '../types'
import { ErrorMessage } from '../shared/ErrorMessage'
const answersBlockStyle = css`
  ${tw` border border-black rounded-md text-black w-full my-4 bg-gray-200`}
`
interface LocationState {
  questions: Question[]
  answers: any[]
}
export const SuccessPage = () => {
  const { state } = useLocation()
  const { questions, answers } = state as LocationState
  if (!questions || !answers) {
    return <ErrorMessage title="Something wrong happened" />
  }
  return (
    <Layout>
      <div tw="flex flex-col">
        <h1 css={titleStyle}>Thank you for your feed back</h1>
        <div css={answersBlockStyle}>
          <SurveyForm questions={questions} initialValue={answers} disabled />
        </div>
      </div>
    </Layout>
  )
}
