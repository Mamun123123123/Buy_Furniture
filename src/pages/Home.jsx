import React from 'react'
import heroImg from "../assets/hero.png"

const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center max-w-2xl px-4 space-y-6">

        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Design a home that feels calm, modern, and truly yours
        </h1>

        <p className="text-gray-200 text-sm md:text-base">
          Discover premium furniture that blends comfort, style, and functionality for your dream space.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">

          <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
            Shop Now
          </button>

          <button className="bg-white hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full transition">
            Explore
          </button>

        </div>

      </div>
    </section>
  )
}

export default Home