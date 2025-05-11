'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Import all color-related images
import A from '../public/images/A.jpg';   // Default
import W from '../public/images/W.jpg';   // Gray
import T from '../public/images/T.jpg';   // Blue
import Qa from '../public/images/Qa.jpg'; // Lime
import HMCategories from './HM';

// Color map linking color names to images
const colorOptions = [
  { name: 'Lime', hex: '#84cc16', image: Qa },
  { name: 'Blue', hex: '#3b82f6', image: T },
  { name: 'Gray', hex: '#6b7280', image: W },
];

const sizes = ['S', 'M', 'L', 'XL'];

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleAddToCart = () => {
    alert(`Added to cart!\nSize: ${selectedSize}\nColor: ${selectedColor.name}`);
  };

  const handleBuyNow = () => {
    alert(`Buying Now\nSize: ${selectedSize}\nColor: ${selectedColor.name}`);
  };

  const handleColorSelect = (color: typeof selectedColor) => {
    setSelectedColor(color);
  };

  return (<>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <div className="relative overflow-hidden group rounded-xl border border-gray-200">
          <Image
            src={selectedColor.image}
            alt={selectedColor.name}
            className="transition-transform duration-300 group-hover:scale-110 object-cover w-full h-full"
            width={600}
            height={600}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Premium Product</h1>
            <p className="text-lg text-gray-600 mb-4">
              A beautifully crafted product designed to enhance your experience.
            </p>
            <div className="text-2xl font-semibold text-lime-700 mb-6">₹2000</div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Select Size:</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? 'bg-lime-600 text-white border-lime-600'
                        : 'text-gray-700 border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Choose Color:</h3>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color)}
                    className={`w-9 h-9 rounded-full border-2 transition ${
                      selectedColor.name === color.name
                        ? 'ring-2 ring-offset-1 ring-lime-600'
                        : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full bg-lime-600 text-white py-3 px-6 rounded-lg hover:bg-lime-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <HMCategories/></>
  );
};

export default ProductPage;
