import React, { useEffect } from "react";
import "../style/register.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useForms from "../hooks/useForms";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import uniqid from "uniqid";
import { changeUserDetails } from "../redux/usersReducer";
import { setUserUsername } from "../redux/loginReducer";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { isLoged } from "../redux/isLogedInReducer";

function Profile() {
  let windowWidth = useSelector((state) => state.window.value);
  let canvas = useSelector((state) => state.offcanvas.isOpen);
  let isloged = useSelector((state) => state.isLoged.isLoged);
  let userName = useSelector((state) => state.loggedinUser.value);
  let users = useSelector((state) => state.users.arr);
  let userInfo = users.find((user) => user.username === userName);
  let dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 3000, delay: 40 });
  }, []);

  const [user, ref, handleChange, handleSubmit] = useForms();

  const [newUser, setNewUser] = useState(userInfo);
  const [showPassword, setShowPassword] = useState(false);
  const [showFoods, setShowFoods] = useState(false);

  const setActive = () => {
    document.getElementById("orderedFoods").classList.add("active");
    document.getElementById("userProfile").classList.remove("active");
    setShowFoods(true);
  };

  const disActive = () => {
    document.getElementById("orderedFoods").classList.remove("active");
    document.getElementById("userProfile").classList.add("active");
    setShowFoods(false);
  };

  const changeDetails = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value, id: uniqid() });
  };

  const submit = (e) => {
    e.preventDefault();
    if (newUser.id !== userInfo.id) {
      dispatch(changeUserDetails({ id: userInfo.id, user: newUser }));
      dispatch(setUserUsername(newUser.username));
    }
  };

  const displayPsw = () => {
    setShowPassword(!showPassword);
    if (document.getElementById("psw").type === "text") {
      document.getElementById("psw").type = "password";
    } else {
      document.getElementById("psw").type = "text";
    }
  };

  const logOut = () => {
    dispatch(isLoged(false));
  };

  return (
    <section
      className="profileSec"
      style={
        windowWidth <= 790
          ? { marginLeft: "0" }
          : { marginLeft: canvas ? "250px" : "0" }
      }
    >
      {/** THIS IS LOGIN CARD */}
      <div className="loginCard" style={{ display: isloged ? "none" : "flex" }}>
        <h3 data-aos="zoom-in">Log In</h3>
        <form onSubmit={handleSubmit}>
          <label data-aos="fade-up">
            Username
            <input
              name="username"
              type="text"
              value={user.username || ""}
              onChange={handleChange}
            />
          </label>

          <label data-aos="fade-up">
            Password
            <input
              name="psw"
              type="password"
              value={user.psw || ""}
              onChange={handleChange}
            />
          </label>
          <button
            disabled={!user.username || !user.psw || user.psw.length < 8}
            data-aos="fade-up"
          >
            Log In
          </button>
        </form>
        <p ref={ref} className="falseLog"></p>
        <div>
          <p>Haven't account yet?</p>
          <Link to={"/register"}> Start Here</Link>
        </div>
      </div>
      {/** THIS IS LOGIN CARD */}

      {/** THIS IS PROFILE INFO TO CHANGE OR LOOK AT */}

      <div
        className="profileCont"
        style={{ display: isloged ? "flex" : "none", flexWrap: canvas ? 'wrap' : "" }}
      >
        {/**Profile settings */}
        <div className="settings">
          <h3 className="active" id="userProfile" onClick={disActive}>
            My Profile
          </h3>
          <h3 id="orderedFoods" onClick={setActive}>
            Order History
          </h3>
          <h3 onClick={logOut}>Log Out</h3>
        </div>
        {/**Profile settings */}

        <div
          className="userInfo"
        >
          <form
            onSubmit={submit}
            style={{ display: showFoods ? "none" : "flex" }}
          >
            <label data-aos="fade-up" data-aos-anchor=".other-element">
              Name
              <input
                name="name"
                type="text"
                onChange={changeDetails}
                value={newUser ? newUser.name : ""}
              />
            </label>

            <label data-aos="fade-up" data-aos-anchor=".other-element">
              Username
              <input
                name="username"
                type="text"
                onChange={changeDetails}
                value={newUser ? newUser.username : ""}
              />
            </label>
            <label data-aos="fade-up" data-aos-anchor=".other-element">
              City
              <input
                name="city"
                type="text"
                onChange={changeDetails}
                value={newUser ? newUser.city : ""}
              />
            </label>
            <label data-aos="fade-up" data-aos-anchor=".other-element">
              Street
              <input
                name="street"
                type="text"
                onChange={changeDetails}
                value={newUser ? newUser.street : ""}
              />
            </label>
            <label data-aos="fade-up" data-aos-anchor=".other-element">
              Tel
              <input
                name="tel"
                type="tel"
                onChange={changeDetails}
                value={newUser ? newUser.tel : ""}
              />
            </label>

            <label data-aos="fade-up" data-aos-anchor=".other-element">
              {" "}
              Password{" "}
            </label>
            <div
              data-aos="fade-up"
              data-aos-anchor=".other-element"
              className="psw"
            >
              <input
                id="psw"
                name="psw"
                type="password"
                onChange={changeDetails}
                value={newUser ? newUser.psw : ""}
              />
              <span id="eye" onClick={displayPsw}>
                {" "}
                {showPassword ? (
                  <AiOutlineEyeInvisible fill="yellow" color="yellow" />
                ) : (
                  <AiOutlineEye fill="yellow" color="yellow" />
                )}{" "}
              </span>
            </div>

            <button

            // disabled={
            //   !user.name ||
            //   !user.city ||
            //   !user.street ||
            //   !user.tel ||
            //   !user.username ||
            //   !user.psw ||
            //   user.psw.length < 8
            // }
            >
              Update
            </button>
          </form>

          <div
            className="foodCont"
            style={{ display: showFoods ? "flex" : "none" }}
          >
            {newUser
              ? newUser.orderedFoods.length !== 0
                ? newUser.orderedFoods.map((food) => {
                    return (
                      <div key={food.id} className="foodCards">
                        <img src={food.img} alt="404" />
                        <div className="foodInfo">
                          <h4>{food.nameOfFood}</h4>
                          <div className="price">
                            <p className="old">{food.oldPrice} $</p>
                            <p className="new">{food.newPrice} $</p>
                          </div>
                          <p>Quantity: {food.quantity}</p>
                        </div>
                      </div>
                    );
                  })
                : "None"
              : "None"}
          </div>
        </div>
      </div>

      {/** THIS IS PROFILE INFO TO CHANGE OR LOOK AT */}
    </section>
  );
}

export default Profile;
