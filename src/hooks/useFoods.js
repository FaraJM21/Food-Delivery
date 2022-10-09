import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderedFoods } from "../redux/usersReducer";

function useFoods(param) {
  let users = useSelector((state) => state.users.arr);
  let userName = useSelector((state) => state.loggedinUser.value);
  const foods = useSelector((state) => state.foods.foods);
  const food = foods.filter((food) => food.category === `${param}`); //MUST CONFIRM PARAM
  let windowWidth = useSelector((state) => state.window.value);
  let canvas = useSelector((state) => state.offcanvas.isOpen);
  let isLogedIn = useSelector((state) => state.isLoged.isLoged);
  let user = users.find((user) => user.username === userName);
  let dispatch = useDispatch();
  const [displayMap, setDisplayMap] = useState(false);


  const [open, setOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [foodName, setFoodName] = useState("");

  const handleClick = (foodParam) => {
    if (isLogedIn === true) {
      if (
        user.orderedFoods.find(
          (food) => food.nameOfFood === foodParam.nameOfFood
        )
      ) {
        setIsOrdered(true);
        setFoodName(foodParam.nameOfFood);
      } else {
        dispatch(
          orderedFoods({ username: userName, enrolledFoods: foodParam })
        );
        setOpen(true);
        setFoodName(foodParam.nameOfFood);
      }
    } else {
      setOpen(true);
    }
  };

  
  const showMap = ()=>{
    setDisplayMap(!displayMap)
  }
  

  return [
    food,
    windowWidth,
    canvas,
    open,
    isOrdered,
    foodName,
    handleClick,
    setOpen,
    setIsOrdered,
    showMap,
    displayMap,
  ];
}

export default useFoods;
