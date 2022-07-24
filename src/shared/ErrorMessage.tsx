/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'

interface IErrorMessageProps {
  message: string
}
const errorContainerStyle = css`
  ${tw`bg-red-700 text-white rounded-2xl p-4 my-4`}
`
export const ErrorMessage = (props: IErrorMessageProps) => {
  const { message } = props
  return <div css={errorContainerStyle}>{message}</div>
}
