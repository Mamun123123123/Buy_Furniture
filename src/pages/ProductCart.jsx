import React, { useContext } from 'react'
import getImgURL from '../utils/getImageURL'
import { CartContext } from '../context/CartContex'

const ProductCart = ({ item }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white rounded-3xl w-full max-w-[250px] sm:max-w-[280px] mx-auto flex flex-col items-center justify-center shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      <div className="flex items-center justify-center p-3 sm:p-4">
        <img
          src={getImgURL(item.imageUrl)}
          alt={item.name}
          className="w-40 sm:w-48 h-36 sm:h-40 object-cover rounded-2xl hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 space-y-2 w-full">

        <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
          {item.category}
        </span>

        <h2 className="text-base sm:text-lg font-bold text-gray-800 truncate">
          {item.name}
        </h2>

        <div className="flex items-center text-yellow-400 text-sm">
          {"⭐".repeat(item.rating)}
          <span className="text-gray-500 ml-2 text-xs">
            ({item.rating}.0)
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">

          <p className="text-base sm:text-lg font-semibold text-green-600">
            ${item.price}
          </p>

          <button
            onClick={() => addToCart(item)}
            className="bg-blue-900 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition text-sm"
          >
            +
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProductCart