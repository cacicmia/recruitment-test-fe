import { ErrorMessage } from './ErrorMessage'

interface IErrorContainerProps {
  errors?: any | Error | null
}
export const ErrorContainer = (props: IErrorContainerProps) => {
  const { errors } = props
  if (Array.isArray(errors?.data?.errors)) {
    return (
      <>
        {errors.data.errors.map((error: any, index: number) => (
          <ErrorMessage key={index} title={error.title} detail={error.detail} />
        ))}
      </>
    )
  } else {
    return <ErrorMessage title={errors?.message ?? 'Someting went wrong'} />
  }
}
