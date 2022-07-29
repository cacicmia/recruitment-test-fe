/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import tw from 'twin.macro'
import { pageContentStyle } from './Layout'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full p-4 flex items-center justify-start`}
`
const headingStyle = css`
  ${tw`text-left`}
`
export const AppHeader = () => {
  return (
    <header css={headerStyle}>
      <h2 css={[pageContentStyle, headingStyle]}>Lorem ipsum</h2>
    </header>
  )
}
