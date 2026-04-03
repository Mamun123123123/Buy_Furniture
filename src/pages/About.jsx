import React from 'react'
import img from "../assets/hero.png"

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">

      <div
        className="h-[60vh] flex items-center justify-center text-center px-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            We provide high quality furniture to make your home stylish, comfortable, and modern.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="about"
          className="rounded-3xl shadow-xl w-full h-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a passionate team dedicated to delivering premium furniture products. 
            Our goal is to combine comfort, elegance, and affordability in every product we offer.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From chairs to sofas, beds to lamps — we design everything to enhance your lifestyle.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore Products
          </button>
        </div>
      </div>

      <div className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              We ensure the best materials and craftsmanship.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Price</h3>
            <p className="text-gray-600 text-sm">
              High quality doesn’t mean high price.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About