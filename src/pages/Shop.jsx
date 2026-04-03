import React from 'react'
import img from "../assets/bg_hero.jpg"

const Shop = () => {
  return (
    <>
     <section className='min-h-screen'>
      <div
        className='w-full h-[570px] sm:h-[570px] md:h-[680px] lg:h-[650px] bg-cover bg-center flex items-center justify-center text-white'
        style={{ backgroundImage: `url(${img})` }}
      >
           <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4'>
             Shop Our Product
           </h1>
      </div>
     </section>
    </>
  )
}

export default Shop