import React, { useState, useEffect } from "react";
import Meal from "../Category/Category";
function FilteredList({ category }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (category) {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMeals(data.meals))
        .catch((error) => console.error(error));
    }
  }, [category]);

  return (
    <div>
      <h2>{category || "Please select a category"}</h2>
      <ul>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
