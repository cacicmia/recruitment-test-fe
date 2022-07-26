/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useController, useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import { Question } from '../types'

interface IInputFieldProps {
  question: Question
  disabled?: boolean
}
const questionInputType = {
  text: 'string',
  rating: 'number'
}
const inputStyle = css`
  ${tw` border border-black rounded-md text-black w-full my-4`}
`
export const InputField = (props: IInputFieldProps) => {
  const { question, disabled = false } = props
  const { control } = useFormContext()
  const {
    field,
    fieldState: { error }
  } = useController({
    name: question.questionId,
    control
  })
  return (
    <div tw="flex flex-col">
      <label htmlFor={field.name}> {question.label} </label>
      <input
        css={inputStyle}
        name={field.name}
        type={questionInputType[question.questionType]}
        value={field.value}
        required={question.required}
        min={question.attributes?.min}
        max={question.attributes?.max}
        onChange={field.onChange}
        disabled={disabled}
      />
    </div>
  )
}
