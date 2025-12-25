"use client"

import Product from "./_components/Product"

export default function Page() {
  function handleBuy() {
    alert("Product purchased!")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our curated selection of cutting-edge tools
          </p>
        </div>
        <div className="flex justify-center">
          <Product
            title="AI Resume Analyzer"
            price={499}
            onBuy={handleBuy}
          />
        </div>
      </div>
    </div>
  )
}
