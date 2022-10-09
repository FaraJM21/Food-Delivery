import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import "../style/restaurants.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Snackbars from "../componets/Snackbars";
import SecondSnackbar from "../componets/SecondSnackbar";
import useFoods from "../hooks/useFoods";

function Burgers() {
  const [
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
  ] = useFoods("Burger");

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);

  return (
    /** RESTAURANT CONT */
    <div
      className="mealsCont"
      style={
        windowWidth <= 770
          ? { paddingLeft: "0" }
          : { paddingLeft: canvas ? "250px" : "0" }
      }
    >
      {/** START ABOUT RESTAURANT */}
      <div className="aboutMeal">
        <div className="pics">
          <div
            className="mainImg"
            data-aos="fade-up"
            data-aos-anchor=".other-element"
          >
            <lottie-player
              id="img"
              src="https://assets1.lottiefiles.com/packages/lf20_oajnolzx.json"
              mode="bounce"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="images">
            <div
              className="cont"
              data-aos="zoom-in"
              data-aos-anchor=".other-element"
            >
              <img
                src="https://i.pinimg.com/originals/c9/4a/ff/c94affe6bcb9fbf7d3508ba98977a1d1.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Soft</div>
              </div>
            </div>

            <div
              className="cont"
              data-aos="zoom-in-down"
              data-aos-anchor=".other-element"
            >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/1/443/701/fast-food-burger-wallpaper-preview.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Delicious</div>
              </div>
            </div>

            <div
              className="cont"
              data-aos="zoom-in-up"
              data-aos-anchor=".other-element"
            >
              <img
                src="https://wallpaperaccess.com/full/219348.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Hot</div>
              </div>
            </div>

            <div
              className="cont"
              data-aos="zoom-in-left"
              data-aos-anchor=".other-element"
            >
              <img
                src="https://wallpaperaccess.com/full/1312732.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Burgers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="infoRes">
          <div className="mainInfo">
            <h3 data-aos="fade-up">Mindels Burger and Fries</h3>
            <p data-aos="fade-up">Austin Texas</p>
            <div className="time" data-aos="fade-up">
              <p id="open">Open Now</p>
              <p>10:00 am - 10:00 pm </p>
            </div>
            <div className="direction" data-aos="fade-up">
              <p>Direction</p>
              <lottie-player
                onClick={showMap}
                src="https://assets2.lottiefiles.com/private_files/lf30_D4yZiV.json"
                mode="bounce"
                background="transparent"
                speed="0.3"
                id="map"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="reviews" data-aos="fade-up">
            <span>
              {" "}
              <i> 3.6 </i>{" "}
              <i>
                {" "}
                <MdStar />
              </i>{" "}
            </span>
            <p>
              96 <br />
              Reviews
            </p>
          </div>
        </div>
      </div>
      {/** END ABOUT RESTAURANT */}

      {/** Back IMAGE */}
      <div
        className="backImg"
        style={{ display: displayMap ? "none" : "block" }}
      ></div>
      <iframe
        style={{ display: displayMap ? "block" : "none" }}
        title="myframe"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A78d8cb9ab194d0ea08e139f0dd8dffe8cff35b340fa2d45310cb14e5f1973280&amp;source=constructor"
        width="90%"
        height="593"
   
      ></iframe>
      {/** Back IMAGE */}

      {/** BURGER */}
      <div className="meal">
        {food.map((burger) => {
          return (
            <div key={burger.id} className="mealCard" data-aos="fade-right">
              <img src={burger.img} alt="404" />

              <div className="mealInfo">
                <h4>{burger.nameOfFood}</h4>

                <div className="star">
                  <span>
                    <MdStar color="yellow" fill="yellow"/>
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow"/>
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow"/>
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow"/>
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow"/>
                  </span>
                </div>

                <div className="price">
                  <span className="new">${burger.newPrice}</span>
                  <span className="old">${burger.oldPrice}</span>
                </div>
                <p>{burger.text}</p>
                <button onClick={() => handleClick(burger)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      {/** BURGER */}

      <Snackbars open={open} setOpen={setOpen} foodName={foodName} />

      <SecondSnackbar
        isOrdered={isOrdered}
        setIsOrdered={setIsOrdered}
        foodName={foodName}
      />
    </div>
  );
}

export default Burgers;
