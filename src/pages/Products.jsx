import React from 'react'
import {products} from '../utils/Products'
import ProductCart from './ProductCart'
const Products = ({heading}) => {
    const category = ["Chair","Beds","Sofa","Lamp"]
  return (
    <>
     <div>
        <div>
            <h2 className='text-4xl font-bold text-center my-8'>{heading}</h2>
            <div className='bg-slate-400 max-w-md mx-auto sm:rounded-full md:p-2.5 mb-16'>
                    <div className='flex md:justify-evenly sm:flex-row justify-center'>
                {category.map((item)=>
                   <button key={item} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-amber-800 hover:text-white transition-colors`}>{item}</button>
                )}
                    </div>
            </div>
            <div>
                {products.map((item,index)=>{
                    <ProductCart key={index} item={item}/>
                })}
            </div>
        </div>
    </div> 
    </>
  )
}

export default Products
