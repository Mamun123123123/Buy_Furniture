import React from 'react'
import "./app.css"
import { Link, Outlet } from 'react-router'
const App = () => {
  return (
    <>
    <nav className=' bg-amber-300'>
      <ul className='flex gap-3'>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Outlet />
    <footer>footer</footer>
    </>
    
  )
}

export default App
