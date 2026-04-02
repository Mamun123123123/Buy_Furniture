import React from 'react'
import "./app.css"
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App