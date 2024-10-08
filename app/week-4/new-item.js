"use client";

import {useState} from 'react';

export default function NewItem() {
  // quantity has a default value of 1
  const [quantity, setQuantity] = useState(1);

  // incrementing + making sure it doesnt go over 20
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // decrementing + making sure it doesnt go under 1 
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center space-x-4">
        {/* decrement button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50' : 'opacity-100'}`}
        >
          -
        </button>

        {/* display quantity */}
        <span className="text-lg">{quantity}</span>

        {/* increment button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50' : 'opacity-100'}`}
        >
          +
        </button>
      </div>
    </div>
  );
}