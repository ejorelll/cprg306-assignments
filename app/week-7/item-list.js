"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    else if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const groupByCategory = () => {
    return items.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(item);
      return grouped;
    }, {});
  };

  const groupedItems = groupByCategory();

  const renderGroupedItems = () => (
    Object.keys(groupedItems).sort().map((category) => (
      <div key={category} className="mb-4">
        <h2 className="text-lg font-semibold capitalize">{category}</h2>
        <ul>
          {groupedItems[category]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <Item key={item.id} {...item} />
            ))}
        </ul>
      </div>
    ))
  );

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 rounded-lg ${sortBy === 'name' ? 'bg-gray-600' : 'bg-gray-400'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 rounded-lg ${sortBy === 'category' ? 'bg-gray-600' : 'bg-gray-400'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`p-2 rounded-lg ${sortBy === 'grouped' ? 'bg-gray-600' : 'bg-gray-400'}`}
        >
          Group by Category
        </button>
      </div>
      <div>
        {sortBy === 'grouped' ? renderGroupedItems() : sortedItems.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default ItemList;
