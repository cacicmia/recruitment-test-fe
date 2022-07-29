import { FC, ReactNode } from 'react'
/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from '@emotion/react'
import tw from 'twin.macro'
export const pageContentStyle = css`
  ${tw`max-w-full max-w-xl px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto`}
`
interface ILayoutProps {
  customCss?: Interpolation<Theme>
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = (props) => {
  const { customCss, children } = props
  return <div css={[pageContentStyle, customCss]}>{children}</div>
}
