import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './main/Home'
import About from './main/About'
import Ong from './main/Ong'
import './Default.css'

import ErrorPage from './Error'

import Login from '../components/login/LoginForm'

//contexto da aplicação (basicamente um login que vai ser validar uma sessão)
import { AuthContext } from '../context/auth'

const AppRoutes = () => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    console.log('login auth', { email, password })
    setUser({ id: '123', email })
  }

  const logout = () => {
    console.log('logout')
  }

  return (
    <Router>
      <AuthContext.Provider value={{ authenticated: !!user, user, login }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ong" element={<Ong />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  )
}

export default AppRoutes
