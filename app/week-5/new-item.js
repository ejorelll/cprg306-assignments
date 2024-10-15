"use client";

import {useState} from 'react';

export default function NewItem() {
  // quantity has a default value of 1
  const [quantity, setQuantity] = useState(1);
  
  const [name, setName] = useState(""); 
  const [category, setCategory] = useState("produce"); 

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

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item); // Log the item object

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the form fields
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
<div className="flex flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter item name"
          />
        </div>

        {/* Quantity Field (existing code) */}
        <div className="flex items-center space-x-4">
          {/* Decrement button */}
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            -
          </button>

          {/* Display quantity */}
          <span className="text-lg">{quantity}</span>

          {/* Increment button */}
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50' : 'opacity-100'}`}
          >
            +
          </button>
        </div>

        {/* Category Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}