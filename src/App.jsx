import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'

function App() {
  return (
      <div className='bg-[#0A0A0A] text-[#EEE6E2] px-4 xl:px-0'>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App