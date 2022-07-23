/** @jsxImportSource @emotion/react */
import './App.css'
import tw from 'twin.macro'
import { css } from '@emotion/react'
import { AppRouter } from './AppRouter'
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        css={css`
          ${tw`bg-yellow-100`}
        `}></header>
    </div>
  )
}

export default App
