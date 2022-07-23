import './App.css'
import tw from 'twin.macro'
import { css } from '@emotion/react'
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        css={css`
          ${tw`bg-yellow-100`}
        `}></header>
      <p>TODO</p>
    </div>
  )
}

export default App
