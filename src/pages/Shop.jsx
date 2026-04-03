import React from 'react'
import img from "../assets/bg_hero.jpg"

const Shop = () => {
  return (
    <>
     <section className='pt-20 min-h-screen'>
      <div className='w-full h-[450px] bg-cover flex items-center justify-center text-white' style={{backgroundImage:`url(${img})`}}>
           <h1 className='text-4xl font-bold'>Shop Our Product</h1>
      </div>
     </section>
    </>
  )
}

export default Shop
