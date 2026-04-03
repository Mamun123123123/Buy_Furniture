import React, { useContext } from 'react'
import { CartContext } from '../context/CartContex'
import getImgURL from '../utils/getImageURL'

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Your Selected Furniture
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                <img
                  src={getImgURL(item.imageUrl)}
                  alt={item.name}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />

                <div className="p-4 space-y-2">

                  <h2 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>

                  <p className="text-green-600 font-semibold text-lg">
                    ${item.price}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>
          <div className="mt-10 bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">

            <h2 className="text-xl font-bold">
              Total: <span className="text-green-600">${total}</span>
            </h2>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

export default CartPage