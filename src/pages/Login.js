import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './Error'
import Login from './login/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
