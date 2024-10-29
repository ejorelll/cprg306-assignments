"use client";
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName.replace(/,.*|[^a-zA-Z\s]/g, '').trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="max-w-md mx-auto p-4 flex flex-col md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-extrabold bg-gray-700 p-3 mb-2 rounded-lg">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="md:w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
};

export default Page;
