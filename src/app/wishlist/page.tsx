'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrashIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 2999,
      image: '/images/headphones.jpg',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 4999,
      image: '/images/watch.jpg',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 1999,
      image: '/images/speaker.jpg',
    },
  ])

  const removeItem = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
  }

  const moveToCart = (id: number) => {
    console.log(`Moved item ${id} to cart`)
    removeItem(id)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Wishlist
      </motion.h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {wishlist.map((item) => (
            <motion.div
              key={item.id}
              className="flex bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-1/3 h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                  <p className="text-gray-600 text-sm mb-3">Rs. {item.price}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                  >
                    <TrashIcon className="w-4 h-4" />
                    Remove
                  </button>
                  <button
                    onClick={() => moveToCart(item.id)}
                    className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    Move to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage
