/** @jsxImportSource @emotion/react */
import './App.css'
import tw from 'twin.macro'
import { css } from '@emotion/react'
import { AppRouter } from './AppRouter'
import { AppHeader } from './shared/AppHeader'
function App() {
  return (
    <div className="App">
      <AppHeader />

      <AppRouter />
    </div>
  )
}

export default App
