import { MoonLoader } from 'react-spinners'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'

const loaderContainerStyle = css`
  ${tw`w-full flex items-center justify-center p-4`}
`
const loaderStyle = css`
  position: relative;
  margin: auto;
`
export const Loader = () => {
  return (
    <div css={loaderContainerStyle}>
      <MoonLoader color={'#442AC9'} loading css={loaderStyle} />
    </div>
  )
}
