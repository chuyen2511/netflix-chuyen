import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/login/login'
import { Route, Router, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='login' element={<Login/>} />
    </Routes>
      
    </div>
  )
}

export default App