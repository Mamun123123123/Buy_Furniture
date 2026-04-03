import React, { useState } from 'react'
import { products } from '../utils/Products'
import ProductCart from './ProductCart'
const Products = ({ heading }) => {
    const category = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selected,setSelected] = useState("Chair")
    const filterCategory = products.filter((item)=>item.category === selected)
    return (
        <>
            <div>
                <div>
                    <h2 className='text-4xl font-bold text-center my-8'>{heading}</h2>
                    <div className='bg-slate-200 max-w-md mx-auto sm:rounded-full md:p-2.5 mb-16'>
                        <div className='flex md:justify-evenly sm:flex-row justify-center'>
                            {category.map((item) =>
                                <button key={item} onClick={()=>setSelected(item)} className={`py-1.5 sm:px-5 px-8 rounded-full ${selected === item ? "text-white bg-blue-900" : "bg-white"} hover:bg-amber-800  hover:text-white transition-colors`}>{item}</button>
                            )}
                        </div>
                    </div>
                    <div className='grid m-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {filterCategory.map((item, index) => {
                            return <ProductCart key={index} item={item} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
