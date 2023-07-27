import { useEffect, useState } from "react";

const SearchMeals = () => {
  const [meals, setMeals] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const searchValue = event.target.search.value;

    const responseSearchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const responseJsSearchApi = await responseSearchApi.json();

    setMeals(responseJsSearchApi.meals);
  };

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const responseJson = await response.json();

    setMeals(responseJson.meals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {!meals ? (
        <p>No meals found</p>
      ) : (
        <div  className="flex-container">
          {meals.map((meal) => (
            <div className="meal-card" key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMeals;
