import "./App.css";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import MealsList from "./MealsList";
import RandomMeal from "./RandomMeal";
import SearchMeals from "./SearchMeals";

function App() {
  return (
    <>
      <Header />
      <SearchMeals />
      <Categories />
      {/* <RandomMeal /> */}
      {/* <MealsList /> */}
      <Footer />
    </>
  );
}

export default App;
