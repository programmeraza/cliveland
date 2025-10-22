import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import ChevronPage from './pages/ChevronPage'
import ErrorPage from './pages/ErrorPage'
import PolicyPage from './pages/PolicyPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/vacancy' element={<ChevronPage/>} />
        <Route path='/policy' element={<PolicyPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
