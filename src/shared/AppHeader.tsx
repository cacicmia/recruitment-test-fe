/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full p-4 flex items-center justify-start`}
`
export const AppHeader = () => {
  return <header css={headerStyle}>Lorem ipsum</header>
}
