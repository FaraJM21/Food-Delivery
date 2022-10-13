import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoged } from "../redux/isLogedInReducer";
import { isAdmin } from "../redux/isAdminReducer";
import Offcanvas from "./Offcanvas";
import { openCanvas } from "../redux/canvasReducer";
import { getWidth } from "../redux/windowWidthReducer";

function Header() {
  let windowWidth = useSelector((state) => state.window.value);
  const [open, setOpen] = useState(true);
  let users = useSelector((state) => state.users.arr);
  let userName = useSelector((state) => state.loggedinUser.value);
  let isLogedIn = useSelector((state) => state.isLoged.isLoged);
  let isadmin = useSelector((state) => state.isAdmin.isAdmin);
  let dispatch = useDispatch();
  let canvas = useSelector((state) => state.offcanvas.isOpen);
  let userFoodArr = users.find((user) => user.username === userName);
  let prevScrollpos = window.pageYOffset;
  let navigate = useNavigate()

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
      } else {
        document.querySelector("header").style.top = "-50%";
      }
      prevScrollpos = currentScrollPos;
    }


  const logOut = () => {
    dispatch(isAdmin(false));
    dispatch(isLoged(false));
  };

  const handleMove = () => {
    dispatch(getWidth(window.innerWidth));
  };

  const handleBurger = () => {
    setOpen(!open);
    dispatch(openCanvas(open));
  };

  return (
    <>
      <header onMouseMove={handleMove}>
        <nav id="nav">
          <div className="navCont">
            <lottie-player
              style={
                windowWidth <= 670
                  ? { marginLeft: "0" }
                  : { marginLeft: canvas ? "250px" : "0" }
              }
              id="video"
              src="https://assets8.lottiefiles.com/packages/lf20_dbv9sfqm.json"
              mode="bounce"
              background="transparent"
              speed="0.8"
              loop
              autoplay
            ></lottie-player>

            <div className="navLinks">
              <div className="mainDetails">
                <Link
                  to={"/"}
                  id="links"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>

                <Link
                  style={{ display: isadmin ? "none" : "block" }}
                  id="links"
                  to={"restaurant"}
                  className="nav-link"
                >
                  Restaurants
                </Link>

                {isLogedIn ? (
                  <div className="profileBox">
                    {isadmin ? (
                      <div className="adminCont">
                        <span onClick={logOut}>
                          <lord-icon
                            src="https://cdn.lordicon.com/zthozvfn.json"
                            trigger="hover"
                            colors="primary:#242424,secondary:#e8b730,tertiary:#f9c9c0,quaternary:#ebe6ef"
                            state="hover-jump"
                            style={{ width: "100px", height: "50px" }}
                          ></lord-icon>
                        </span>
                        <h4>{userName}</h4>
                      </div>
                    ) : (
                      <div className="userCont">
                        <div className="user" onClick={()=> navigate('/profile')}>
                          <span>
                            <lord-icon
                              src="https://cdn.lordicon.com/ljvjsnvh.json"
                              trigger="hover"
                              colors="primary:#000000,secondary:#e8e230"
                              state="hover-1"
                              style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                          </span>
                          <h4>{userName}</h4>
                        </div>

                        <div className="cart">
                          <Link
                            style={{ display: isadmin ? "none" : "block" }}
                            id="cart"
                            to={"cart"}
                            className="nav-link"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gtcqrwnh.json"
                              trigger="hover"
                              colors="primary:#ffffff"
                              style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                          </Link>
                          <p> {`${userFoodArr.orderedFoods.length}+` || "0"}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={"profile"} id="links" className="nav-link">
                    Log In
                  </Link>
                )}

              
              </div>

            </div>

            <div
              className={
                windowWidth <= 670
                  ? "hamburger"
                  : canvas
                  ? "change"
                  : "hamburger"
              }
              onClick={handleBurger}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </nav>

        <Offcanvas setOpen={setOpen} />
      </header>
    </>
  );
}

export default Header;
