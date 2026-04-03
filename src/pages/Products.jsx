import React, { useState } from 'react'
import { products } from '../utils/Products'
import ProductCart from './ProductCart'

const Products = ({ heading }) => {
  const category = ["Chair", "Beds", "Sofa", "Lamp"]
  const [selected, setSelected] = useState("Chair")

  const filterCategory = products.filter(
    (item) => item.category === selected
  )

  return (
    <div className="bg-gray-50 min-h-screen  px-4">

      <h2 className="text-3xl md:text-4xl font-bold text-center my-10">
        {heading}
      </h2>

      <div className="bg-white shadow-md max-w-2xl mx-auto rounded-full p-2 mb-12 overflow-x-auto">
        <div className="flex gap-2 justify-evenly whitespace-nowrap">
          {category.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition whitespace-nowrap ${
                selected === item
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 hover:bg-amber-600 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
  {filterCategory.map((item, index) => (
    <div key={index} className="w-full max-w-[250px]">
      <ProductCart item={item} />
    </div>
  ))}
</div>

    </div>
  )
}

export default Products