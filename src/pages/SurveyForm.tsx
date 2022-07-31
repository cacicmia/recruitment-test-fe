/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputField } from '../shared/InputField'
import { Question } from '../types'
import { Button } from '../shared/Button'
import { ErrorContainer } from '../shared/ErrorContainer'

interface ISurveyFormProps {
  questions: Question[]
  onSubmit?: (data: any) => void
  disabled?: boolean
  initialValue?: any
  errors?: any[] | null
}
export const SurveyForm = (props: ISurveyFormProps) => {
  const { questions, disabled = false, initialValue = [], errors } = props
  const [error, setError] = useState<any | undefined>()
  const [fieldErrors, setFieldErrors] = useState<any>()
  const defaultValues = questions.reduce((obj, item) => ({ ...obj, [item.questionId]: '' }), {})

  const initialValues =
    initialValue?.reduce(
      (obj: any, item: any) => ({ ...obj, [item.questionId]: item.answer }),
      {}
    ) ?? {}

  const methods = useForm<any>({
    defaultValues: { ...defaultValues, ...initialValues },
    mode: 'all'
  })
  const submitForm = useCallback(
    methods.handleSubmit(async (values) => {
      setError(null)
      setFieldErrors(null)
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
      } catch (e: any) {
        if (e.status === 422) {
          const errors: any = {}
          // this is sad, but works
          e.data?.errors.forEach((err: any) => {
            const key = err.source.pointer.substr(err.source.pointer.lastIndexOf('/') + 1)
            errors[key] = err.detail
          })
          setFieldErrors(errors)
        } else {
          setError(e)
        }
      }
    }),
    []
  )
  return (
    <div tw="m-4">
      <FormProvider {...methods}>
        <form onSubmit={props.onSubmit && submitForm}>
          {questions.map((question) => (
            <InputField
              key={question.questionId}
              question={question}
              disabled={disabled}
              error={fieldErrors && fieldErrors[question.questionId]}
            />
          ))}
          {!disabled && <Button type="submit" content="Submit form" disabled={disabled} />}
          {error && <ErrorContainer errors={error} />}
        </form>
      </FormProvider>
    </div>
  )
}
