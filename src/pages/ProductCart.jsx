import React from 'react'
import getImgURL from '../utils/getImageURL'

const ProductCart = ({ item }) => {
  return (
    <div className="bg-slate-200 rounded-4xl">
    
      <div className="rounded-4xl m-2 flex items-center justify-center">
        <img
          src={getImgURL(item.imageUrl)}
          alt={item.name}
          className="w-20 h-30 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {item.category}
        </span>
        <h2 className="text-lg font-bold text-gray-800">
          {item.name}
        </h2>
        <div className="flex items-center text-yellow-400 text-sm">
          {"⭐".repeat(item.rating)}
          <span className="text-gray-500 ml-2 text-xs">
            ({item.rating}.0)
          </span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-semibold text-green-600">
            ${item.price}
          </p>

          <button className="bg-blue-900 text-white px-2 rounded-full hover:bg-blue-600 transition">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart