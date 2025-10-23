import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VacancyPage from './pages/VacancyPage'
import ErrorPage from './pages/ErrorPage'
import PolicyPage from './pages/PolicyPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/vacancy' element={<VacancyPage/>} />
        <Route path='/policy' element={<PolicyPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
