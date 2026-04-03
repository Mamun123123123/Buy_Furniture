import React from 'react'
import "./app.css"
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import CartProvider from './context/CartContex'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <CartProvider>
       <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
     
    </>
  )
}

export default App