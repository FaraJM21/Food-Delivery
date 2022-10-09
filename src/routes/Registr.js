import React, { useEffect } from "react";
import "../style/register.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useForms from "../hooks/useForms";
import { useSelector } from "react-redux";


function Registr() {
  let windowWidth = useSelector((state) => state.window.value);
  let canvas = useSelector((state) => state.offcanvas.isOpen);

  useEffect(() => {
    Aos.init({ duration: 3000, delay: 40 });
  }, []);

  const [user, ref, handleChange, handleSubmit] = useForms("register");

  return (
    <section
      className="registerSec"
      style={
        windowWidth <= 670
          ? { marginLeft: "0" }
          : { marginLeft: canvas ? "250px" : "0" }
      }
    >
      <div className="loginCard2">

        <h3 data-aos="zoom-in">Registration</h3>

        <form onSubmit={handleSubmit}>
          <label data-aos="fade-up">
            Your Name
            <input
              name="name"
              type="text"
              value={user.name || ""}
              onChange={handleChange}
            />
          </label>
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
            City
            <input
              name="city"
              type="text"
              value={user.city || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up">
            Street
            <input
              name="street"
              type="text"
              value={user.street || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up">
            Tel
            <input
              name="tel"
              type="tel"
              value={user.tel || ""}
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
           
            disabled={
              !user.name ||
              !user.city ||
              !user.street ||
              !user.tel ||
              !user.username ||
              !user.psw ||
              user.psw.length < 8
            }
          >
            Log In
          </button>
          <p ref={ref} className="modalAlert"></p>
        </form>


        <div className="loginFoo">

          <p>Already have an account ?</p>
          <Link to={"/profile"}> Log In</Link>


        </div>

        
      </div>
    </section>
  );
}

export default Registr;
