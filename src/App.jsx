import React from 'react'
import "./app.css"
import { Link, Outlet } from 'react-router'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
  <Navbar />
  <main className='min-h-screen'>
    <Outlet />
       
  </main>
    <footer>footer</footer>
    </>
    
  )
}

export default App
