import './App.css'

import { AppRouter } from './AppRouter'
import { AppHeader } from './shared/AppHeader'
import { ErrorBoundary } from './shared/ErrorBoundary'
function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <AppRouter />
      </div>
    </ErrorBoundary>
  )
}

export default App
