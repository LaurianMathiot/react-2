import { useEffect, useState } from "react";
import MealsByCategory from "./MealsByCategory";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [mealsByCategory, setMealsByCategory] = useState([]);

  const fetchCategories = async () => {
    const categoriesResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categoriesJs = await categoriesResponse.json();

    setCategories(categoriesJs.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = async (titleCategory) => {
    const responseMeals = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${titleCategory}`
    );
    const mealsByCategory = await responseMeals.json();

    setMealsByCategory(mealsByCategory.meals);
  };

  return (
    <div>
      <h2>Categories</h2>

      <div className="flex-container">
        {categories.map((category) => {
          return (
            <div key={category.idCategory} className="meal-card">
              <button onClick={() => handleCategoryClick(category.strCategory)}>
                {category.strCategory}
              </button>
            </div>
          );
        })}
      </div>
      <MealsByCategory mealsByCategory={mealsByCategory} />
    </div>
  );
};

export default ListCategories;
