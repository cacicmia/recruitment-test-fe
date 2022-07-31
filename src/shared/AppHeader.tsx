/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { pageContentStyle } from './Layout'
const headerStyle = css`
  ${tw` bg-green-200 text-black h-12 w-full p-4 flex items-center justify-start`}
`
const headingStyle = css`
  ${tw`text-left mx-auto`}
`
export const AppHeader = () => {
  return (
    <header css={headerStyle}>
      <Link to="/" css={[pageContentStyle, headingStyle]}>
        <h2 tw="mx-4">Lorem ipsum</h2>{' '}
      </Link>
    </header>
  )
}
