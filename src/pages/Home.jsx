import React from 'react'
import heroImg from "../assets/hero.png"
const Home = () => {
  return (
    <>
      <section className={`relative h-screen bg-cover bg-center   text-taupe-800  `} style={{ backgroundImage: `url(${heroImg})` }}>

        <div className='relative md:pt-38 pt-30 px-4 text-center md:w-1/2 mx-auto space-y-6'>

          <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
            Design a home that feels calm, modern, and truly yours
          </h1>

        </div>
      </section>
      
    </>
  )
}

export default Home