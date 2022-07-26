import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { SuccessPage } from './pages/SuccessPage'
import { SurveyPage } from './pages/SurveyPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="/survey-success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  )
}
