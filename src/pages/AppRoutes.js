import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './main/Home'
import About from './main/About'
import Ong from './main/Ong'
import './Default.css'

import ErrorPage from './Error'

import Login from '../components/login/LoginForm'

//contexto da aplicação (basicamente um login que vai ser validar uma sessão)
import { AuthProvicer } from '../context/auth'

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvicer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ong" element={<Ong />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvicer>
    </Router>
  )
}

export default AppRoutes
