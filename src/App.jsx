import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/login/login'
import { Route, Router, Routes } from 'react-router-dom'
import Player from './pages/Player/Player'


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='player/:id' element={<Player/>} />
    </Routes>
      
    </div>
  )
}

export default App