import { useState } from "react";
import { useSelector } from "react-redux";

function useHomeDetails() {
  let windowWidth = useSelector((state) => state.window.value);
  

  const foods = useSelector((state) => state.foods.foods);

  const [foodsArray, setFoods] = useState(foods);

  const displayAll = () => {
    setFoods(foods);
  };

  const displayPizza = () => {
    const pizza = foods.filter((food) => {
      return food.category === "Pizza";
    });
    setFoods(pizza);
  };

  const displayDrinks = () => {
    const drinks = foods.filter((food) => {
      return food.category === "Drinks";
    });
    setFoods(drinks);
  };

  const displayBurger = () => {
    const burger = foods.filter((food) => {
      return food.category === "Burger";
    });
    setFoods(burger);
  };

  const displayChicken = () => {
    const chicken = foods.filter((food) => {
      return food.category === "Chicken";
    });
    setFoods(chicken);
  };

  const displayFish = () => {
    const fish = foods.filter((food) => {
      return food.category === "Fish";
    });
    setFoods(fish);
  };

  const displaySandwich = () => {
    const sandwich = foods.filter((food) => {
      return food.category === "Sandwich";
    });
    setFoods(sandwich);
  };

  const displaySoup = () => {
    const soup = foods.filter((food) => {
      return food.category === "Soup";
    });
    setFoods(soup);
  };

  const displayCake = () => {
    const cake = foods.filter((food) => {
      return food.category === "Cake";
    });
    setFoods(cake);
  };

  return [
    windowWidth,
    foodsArray,
    displayAll,
    displayBurger,
    displayCake,
    displayChicken,
    displayFish,
    displayPizza,
    displaySandwich,
    displaySoup,
    displayDrinks,
  ];
}

export default useHomeDetails;
