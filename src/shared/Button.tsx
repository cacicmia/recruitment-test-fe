/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { css, Interpolation, Theme } from '@emotion/react'
import { ButtonHTMLAttributes } from 'react'

interface IButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
  customCss?: Interpolation<Theme>
  content: string
  disabled?: boolean
}
const buttonStyle = css`
  ${tw` bg-green-900 text-white p-4 rounded-2xl`}
`
export const Button = (props: IButtonProps) => {
  const { type, customCss, content, onClick, disabled = false } = props
  return (
    <button
      type={type}
      css={[buttonStyle, customCss ? customCss : {}]}
      onClick={() => (onClick ? onClick() : null)}
      disabled={disabled}>
      {content}
    </button>
  )
}
