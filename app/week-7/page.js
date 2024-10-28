"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  // set initial items from itemsData
  const [items, setItems] = useState(itemsData);

  // function to handle adding new items to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // use spread to add item without mutating original array
  };

  // render new item input and items list
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-extrabold bg-gray-700 p-3 mb-2 rounded-lg">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
