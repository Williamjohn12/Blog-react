import React from 'react'
import Navbar from './Componets/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'

import { View, Home,MakeMake,IndivBlog } from './Componets/pages'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/view' element={<View />} />
        <Route path='/MakeMake' element={<MakeMake />} />
        <Route path="/blog" element={<IndivBlog />} />
      </Routes>
    </div>
  )
}

export default App
