"use client";
import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      }
    };
    loadMealIdeas();
  }, [ingredient]);

  if (!meals.length) {
    return <div className="p-4">No meal ideas available for "{ingredient}"</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-md" />
            <span className="text-black">{meal.strMeal}</span> {/* Black text for recipe name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
