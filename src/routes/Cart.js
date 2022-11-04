import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../style/cart.scss";
import {
  decreaseQuantity,
  deleteFood,
  foodRecieved,
  increaseQuantity,
} from "../redux/usersReducer";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
let interval = undefined;

function Cart() {
  let users = useSelector((state) => state.users.arr);
  let userName = useSelector((state) => state.loggedinUser.value);
  let dispatch = useDispatch();
  let user = users.find((user) => user.username === userName);
  const foods = useSelector((state) => state.foods.foods);
  const [displayCheck, setDisplayCheck] = useState(false);
  const [foodPrice, setPrice] = useState(0);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (running) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 60);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      setCompleted(true);
      clearInterval(interval);
      setTimeout(() => {
        dispatch(foodRecieved(userName));
        navigate("/");
      }, 3000);
    }
  }, [progress, dispatch, userName, navigate]);

  const payment = () => {
    setRunning(true);
    document.querySelector(".check").style.display = "none";
    document.querySelector(".paymentProgress").style.display = "flex";
  };

  const increaseFoodQuantity = (foodName) => {
    let price = foods.find((food) => food.nameOfFood === foodName);
    console.log(price.newPrice);

    dispatch(
      increaseQuantity({
        username: userName,
        foodName: foodName,
        foodPrice: price.newPrice,
      })
    );
  };

  const decreaseFoodQuantity = (foodName) => {
    let price = foods.find((food) => food.nameOfFood === foodName);
    console.log(price.newPrice);

    dispatch(
      decreaseQuantity({
        username: userName,
        foodName: foodName,
        foodPrice: price.newPrice,
      })
    );
  };

  const removeFood = (id) => {
    dispatch(deleteFood({ username: userName, id: id }));
  };

  const handleClick = () => {
    setDisplayCheck(true);
    let price = user.orderedFoods.map((food) => food.newPrice);

    setPrice(
      price.reduce((total, num) => {
        return total + Math.round(num);
      })
    );
  };

  return (
    <div className="cartSection">
      {user ? (
        user.orderedFoods.length !== 0 ? (
          <div className="cartCont">
            <table
              id="table"
              style={{ display: displayCheck ? "none" : "table" }}
            >
              <thead id="thead">
                <tr>
                  <th> </th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody id="tbody">
                {user.orderedFoods.map((food) => {
                  return (
                    <tr key={food.id}>
                      <td>
                        <img src={food.img} alt="404" />
                      </td>
                      <td>
                        {" "}
                        <p> {food.nameOfFood}</p>
                      </td>
                      <td>
                        {" "}
                        <p>{food.category}</p>
                      </td>
                      <td>
                        {" "}
                        <div className="quantity">
                          <button
                            id="minus"
                            onClick={() =>
                              decreaseFoodQuantity(food.nameOfFood)
                            }
                          >
                            -
                          </button>
                          <p>{food.quantity}</p>{" "}
                          <button
                            id="plus"
                            onClick={() =>
                              increaseFoodQuantity(food.nameOfFood)
                            }
                          >
                            +
                          </button>
                        </div>{" "}
                      </td>
                      <td>
                        <p id="price">{food.newPrice}$</p>
                      </td>
                      <td>
                        <span onClick={() => removeFood(food.id)}>
                          <BsTrash />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div
              className="check"
              style={{ display: displayCheck ? "flex" : "none" }}
            >
              <div className="foodCost">
                <h4>All food Price</h4>
                <p>{foodPrice}$</p>
              </div>
              <div className="tax">
                <div>
                  <h4>Tax 1</h4>
                  <p>35$</p>
                </div>
                <div>
                  <h4>Tax 2</h4>
                  <p>25$</p>
                </div>
                <div>
                  <h4>Discount</h4>
                  <p>-15$</p>
                </div>
              </div>

              <div className="total">
                <h4>Total</h4>
                <p>{foodPrice + 45}$</p>
              </div>

              <div className="btns">
                <Link
                  to={"/payment"}
                  style={{ display: user.hasCard ? "none" : "flex" }}
                >
                  Next
                </Link>
                <button
                  style={{ display: user.hasCard ? "block" : "none" }}
                  onClick={payment}
                >
                  Pay
                </button>
              </div>
            </div>

            <div className="paymentProgress">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_AQEOul.json"
                style={{ display: completed ? "none" : "block" }}
                background="transparent"
                speed="1"
                id="progress"
                loop
                autoplay
              ></lottie-player>
              <lottie-player
                src="   https://assets5.lottiefiles.com/packages/lf20_ovwsvehd.json"
                background="transparent"
                style={{ display: completed ? "block" : "none" }}
                speed="1"
                id="progress"
                loop
                autoplay
              ></lottie-player>

              <div className="progressCont">
                <div className="progressBar" style={{ width: `${progress}%` }}>
                  {progress}%
                </div>
              </div>
              <div className="paymentInfo">
                <h5>
                  {completed
                    ? "Payment  successfully made"
                    : `Payment is being made`}
                </h5>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_wukqhhrq.json"
                  background="transparent"
                  speed="1"
                  id="anim"
                  style={{ display: completed ? "none" : "block" }}
                  loop
                  autoplay
                ></lottie-player>
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_qckmbbyi.json"
                  background="transparent"
                  style={{ display: completed ? "block" : "none" }}
                  speed="1"
                  id="anim"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>

            <button
              id="nextBtn"
              onClick={handleClick}
              style={{ display: displayCheck ? "none" : "block" }}
            >
              Next
            </button>
          </div>
        ) : (
          "Your cart is empty"
        )
      ) : (
        "None"
      )}
    </div>
  );
}

export default Cart;
