/** @jsxImportSource @emotion/react */
import './App.css'
import tw from 'twin.macro'
import { css } from '@emotion/react'
import { AppRouter } from './AppRouter'
import { AppHeader } from './shared/AppHeader'
import { ErrorBoundary } from './shared/ErrorBoundary'
function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <AppHeader />

        <AppRouter />
      </div>
    </ErrorBoundary>
  )
}

export default App
