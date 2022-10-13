import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openCanvas } from "../redux/canvasReducer";
import { Link, useNavigate } from "react-router-dom";
import { isLoged } from "../redux/isLogedInReducer";
import { isAdmin } from "../redux/isAdminReducer";
function Offcanvas(props) {
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users.arr);
  let canvas = useSelector((state) => state.offcanvas.isOpen);
  let windowWidth = useSelector((state) => state.window.value);
  let userName = useSelector((state) => state.loggedinUser.value);
  let isLogedIn = useSelector((state) => state.isLoged.isLoged);
  let isadmin = useSelector((state) => state.isAdmin.isAdmin);
  let userFoodArr = users.find(user => user.username === userName)
  let navigate = useNavigate()
  const logOut = () => {
    dispatch(isAdmin(false));
    dispatch(isLoged(false));
  };

  const closeCanvas = () => {
    props.setOpen(true);
    dispatch(openCanvas(false));
  };

  return (
    <div
      id="mySidenav"
      className="sidenav"
      style={
        windowWidth <= 670
          ? { width: canvas ? "100%" : "0" }
          : { width: canvas ? "250px" : "0" }
      }
    >
      <span id="closeIcon" onClick={closeCanvas}>
        <MdOutlineClose />
      </span>

      <div className="navLinks">
        {isLogedIn ? (
          <div className="profileBox">
            {isadmin ? (
              /** IF ADMIN WILL LOGIN THIS CLASS WILL BE DISPLAYED */
              <div className="adminCont">
                <span onClick={logOut}>
                  <lord-icon
                    src="https://cdn.lordicon.com/zthozvfn.json"
                    trigger="hover"
                    colors="primary:#242424,secondary:#e8b730,tertiary:#f9c9c0,quaternary:#ebe6ef"
                    state="hover-jump"
                    style={{ width: "100px", height: "60px" }}
                  ></lord-icon>
                </span>
                <h4>{userName}</h4>
              </div>
            ) : (
              //** ELSE USER CONTAINER WILL BE DISPLAYED */
              <div className="userCont" >
                <div className="user" onClick={()=> navigate('/profile')}>
                  <span id="userIcon" onClick={closeCanvas}>
                    <lord-icon
                      src="https://cdn.lordicon.com/ljvjsnvh.json"
                      trigger="hover"
                      colors="primary:#000000,secondary:#eee966"
                      state="hover-1"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </span>
                  <br />
                  <h4>{userName}</h4>
                </div>

                <div className="cart">
                  <Link
                    style={{ display: isadmin ? "none" : "block" }}
                    id="cart"
                    to={"cart"}
                    className="nav-link"
                    onClick={closeCanvas}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/gtcqrwnh.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </Link>
                  <p> {`${userFoodArr.orderedFoods.length}+`|| '0'}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"profile"}
            id="links"
            className="nav-link"
            onClick={closeCanvas}
          >
            Log In
          </Link>
        )}
        <Link
          to={"/"}
          id="links"
          className="nav-link active"
          aria-current="page"
          onClick={closeCanvas}
        >
          Home
        </Link>

        <Link
          style={{ display: isadmin ? "none" : "block" }}
          id="links"
          to={"restaurant"}
          className="nav-link"
          onClick={closeCanvas}
        >
          Restaurants
        </Link>

        {/* <Link
          id="links"
          to={"about"}
          className="nav-link"
          onClick={closeCanvas}
        >
          About Us
        </Link> */}
      </div>
    </div>
  );
}

export default Offcanvas;
