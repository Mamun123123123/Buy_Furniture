import React from 'react'

const WhyChoose = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us
        </h1>
        <p className="text-gray-500 mt-2">
          We provide the best workspace experience for you
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Luxury Facilities
          </h2>
          <p className="text-gray-600">
            The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Affordable Price
          </h2>
          <p className="text-gray-600">
            You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Many Choices
          </h2>
          <p className="text-gray-600">
            We provide many unique workspace choices so that you can choose what fits you best.
          </p>
        </div>

      </div>
    </div>
  )
}

export default WhyChoose