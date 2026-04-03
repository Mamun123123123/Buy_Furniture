import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const exists = cartItems.some(item => item.id === product.id)

    if (exists) {
      toast.error("Product already added")
    } else {
      setCartItems(prev => [...prev, product])
      toast.success("Added to cart")
    }
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    toast.success("Removed from cart")
  }

  const cartCount = cartItems.length

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider