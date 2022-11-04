import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import "../style/restaurants.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Snackbars from "../components/Snackbars";
import SecondSnackbar from "../components/SecondSnackbar";
import useFoods from "../hooks/useFoods";

function Pizza() {
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
  ] = useFoods("Pizza");
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
              src="https://assets5.lottiefiles.com/packages/lf20_isB6Tk/Lottie/data.json"
              background="transparent"
              mode="bounce"
              speed="1"
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
                src="https://trumpwallpapers.com/wp-content/uploads/Pizza-Wallpaper-18-2400-x-1595.jpg"
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
                src="https://wallpaperaccess.com/full/4847275.jpg"
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
                src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTAyNjA5MTc4ODI5OTEy/shourav-sheikh-a66sgfonnqq-unsplash.jpg"
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
                src="https://img.freepik.com/premium-photo/flatbread-pizza-garnished-with-fresh-angular-wooden-pizza-board-top-view-dark-stone-background_608477-193.jpg?w=2000"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Pizzas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="infoRes">
          <div className="mainInfo">
            <h3 data-aos="fade-up">Italian Pizzas</h3>
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
        className="backImgPizza"
        style={{ display: displayMap ? "none" : "block" }}
      ></div>
      {/** Back IMAGE */}
      <iframe
        style={{ display: displayMap ? "block" : "none" }}
        title="myframe"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A78d8cb9ab194d0ea08e139f0dd8dffe8cff35b340fa2d45310cb14e5f1973280&amp;source=constructor"
        width="90%"
        height="593"
      ></iframe>
      {/** Pizzas */}
      <div className="meal">
        {food.map((pizza) => {
          return (
            <div key={pizza.id} className="mealCard" data-aos="fade-right">
              <img src={pizza.img} alt="404" />

              <div className="mealInfo">
                <h4>{pizza.nameOfFood}</h4>

                <div className="star">
                  <span>
                    <MdStar color="yellow" fill="yellow" />
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow" />
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow" />
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow" />
                  </span>

                  <span>
                    <MdStar color="yellow" fill="yellow" />
                  </span>
                </div>

                <div className="price">
                  <span className="new">${pizza.newPrice}</span>
                  <span className="old">${pizza.oldPrice}</span>
                </div>
                <p>{pizza.text}</p>
                <button onClick={() => handleClick(pizza)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      {/** Pizzas */}
      <Snackbars open={open} setOpen={setOpen} foodName={foodName} />
      <SecondSnackbar
        isOrdered={isOrdered}
        setIsOrdered={setIsOrdered}
        foodName={foodName}
      />
    </div>
  );
}

export default Pizza;
