/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputField } from '../shared/InputField'
import { Question } from '../types'
import { Button } from '../shared/Button'
import { ErrorMessage } from '../shared/ErrorMessage'

interface ISurveyFormProps {
  questions: Question[]
  id: number
  onSubmit: (data: any) => void
}
export const SurveyForm = (props: ISurveyFormProps) => {
  const { questions, id } = props
  const [error, setError] = useState<string>('')
  const defaultValues = questions.reduce((obj, item) => ({ ...obj, [item.questionId]: '' }), {})
  console.log(defaultValues)
  const methods = useForm<any>({
    defaultValues,
    shouldUseNativeValidation: true,
    // TODO
    // resolver: yupResolver(schema),
    mode: 'all'
  })
  const submitForm = useCallback(
    methods.handleSubmit(async (values) => {
      setError('')
      const keys = Object.keys(values)
      const answers = keys.map((key) => ({
        questionId: key,
        answer: values[key]
      }))
      try {
        const data = {
          type: 'surveyAnswers',
          attributes: {
            answers
          }
        }
        await props.onSubmit(data)
        console.log(data)
      } catch (e: any) {
        console.log(e)
        setError(e.message)
      }
    }),
    []
  )
  return (
    <div tw="my-4">
      <FormProvider {...methods}>
        <form onSubmit={submitForm}>
          {questions.map((question) => (
            <InputField key={question.questionId} question={question} register={methods.register} />
          ))}
          <Button type="submit" content="Submit form" />
          {error && <ErrorMessage message={error} />}
        </form>
      </FormProvider>
    </div>
  )
}
