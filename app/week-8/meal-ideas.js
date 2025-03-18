"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-l font-semibold">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
