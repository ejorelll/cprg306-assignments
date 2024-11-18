"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // for redirection
import { useUserAuth } from '../../week-9/_utils/auth-context'; // import your AuthContext
import ItemList from '../../week-8/item-list';
import NewItem from '../../week-8/new-item';
import MealIdeas from '../../week-8/meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const {user} = useUserAuth(); // get the current user from AuthContext
  const router = useRouter(); // initialize router for navigation
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // redirect to login page if the user is not authenticated
  if (!user) {
    router.push('/week-9/login'); // adjust path if necessary
    return null; // return null to prevent rendering while redirecting
  }

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
