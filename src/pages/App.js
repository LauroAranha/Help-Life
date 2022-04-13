import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './main/Home'
import About from './main/About'
import Ong from './main/Ong'
import ErrorPage from './Error'
import Nav from '../components/props/Nav'
import Footer from '../components/props/Footer'
import './Default.css'
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ong" element={<Ong />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      
    </Router>
    
  )
}

export default App
