import React from 'react'
import Navbar from './Componets/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'

import { View, Home,MakeMake } from './Componets/pages'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/view' element={<View />} />
        <Route path='/MakeMake' element={<MakeMake />} />
      </Routes>
    </div>
  )
}

export default App
