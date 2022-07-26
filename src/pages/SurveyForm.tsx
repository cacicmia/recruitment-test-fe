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
  onSubmit?: (data: any) => void
  disabled?: boolean
  initialValue?: any
}
export const SurveyForm = (props: ISurveyFormProps) => {
  const { questions, disabled = false, initialValue = [] } = props
  const [error, setError] = useState<string>('')
  const defaultValues = questions.reduce((obj, item) => ({ ...obj, [item.questionId]: '' }), {})

  const initialValues =
    initialValue?.reduce(
      (obj: any, item: any) => ({ ...obj, [item.questionId]: item.answer }),
      {}
    ) ?? {}

  const methods = useForm<any>({
    defaultValues: { ...defaultValues, ...initialValues },
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
        //@ts-ignore
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
    <div tw="m-4">
      <FormProvider {...methods}>
        <form onSubmit={props.onSubmit && submitForm}>
          {questions.map((question) => (
            <InputField key={question.questionId} question={question} disabled={disabled} />
          ))}
          {!disabled && <Button type="submit" content="Submit form" disabled={disabled} />}
          {error && <ErrorMessage message={error} />}
        </form>
      </FormProvider>
    </div>
  )
}
