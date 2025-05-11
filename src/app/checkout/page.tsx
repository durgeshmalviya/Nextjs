"use client";
import { useState, useEffect } from 'react';

export default function Checkout() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(existingCart);
  }, []);

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    const updated = cart.map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-6">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Rs. {item.price}</p>
              <p>Size: {item.size} | Color: {item.color}</p>
              <input
                type="number"
                value={item.quantity}
                min={1}
                className="border px-2 py-1 mt-1 w-20"
                onChange={(e) =>
                  updateQuantity(item.id, item.size, item.color, parseInt(e.target.value))
                }
              />
            </div>
          </div>
        ))
      )}

      <div className="mt-8 text-xl font-bold">Total: Rs. {total}</div>
      <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Place Order
      </button>
    </div>
  );
}
