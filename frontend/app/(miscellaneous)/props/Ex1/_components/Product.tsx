"use client"

type ProductProps = {
  title: string
  price: number
  onBuy: () => void
}

export default function Product({ title, price, onBuy }: ProductProps) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="bg-linear-to-r from-blue-500 to-purple-600 h-2"></div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <div className="flex items-center justify-between mb-6">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
            ₹{price}
          </p>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
            POPULAR
          </span>
        </div>
        <button 
          onClick={onBuy}
          className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
