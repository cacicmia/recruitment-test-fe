import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { SurveyPage } from './pages/SurveyPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
