const MealsByCategory = ({ mealsByCategory }) => {
  return (
    <div className="flex-container">
      {mealsByCategory.map((meal) => {
        return (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MealsByCategory;
