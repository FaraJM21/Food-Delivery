import React, { useEffect } from "react";
import "../auth/auth.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useForms from "../../hooks/useForms";

function Registr() {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 40 });
  }, []);

  const [user, ref, handleChange, handleSubmit] = useForms("register");

  return (
    <section className="registerSec">
      <div className="loginCard2">
        <h3 data-aos="zoom-in">Registration</h3>

        <form onSubmit={handleSubmit}>
          <label data-aos="fade-up" data-aos-anchor=".other-element">
            Your Name
            <input
              name="name"
              type="text"
              value={user.name || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up" data-aos-anchor=".other-element">
            Username
            <input
              name="username"
              type="text"
              value={user.username || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up" data-aos-anchor=".other-element">
            City
            <input
              name="city"
              type="text"
              value={user.city || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up" data-aos-anchor=".other-element">
            Street
            <input
              name="street"
              type="text"
              value={user.street || ""}
              onChange={handleChange}
            />
          </label>
          <label data-aos="fade-up" data-aos-anchor=".other-element">
            Tel
            <input
              name="tel"
              type="tel"
              value={user.tel || ""}
              onChange={handleChange}
            />
          </label>

          <label data-aos="fade-up" data-aos-anchor=".other-element">
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
