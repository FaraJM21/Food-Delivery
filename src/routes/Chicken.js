import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import "../style/restaurants.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Snackbars from "../components/Snackbars";
import SecondSnackbar from "../components/SecondSnackbar";
import useFoods from "../hooks/useFoods";

function Chicken() {
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
  ] = useFoods("Chicken");

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
              src="https://assets1.lottiefiles.com/packages/lf20_rzxphiic.json"
              mode="bounce"
              background="transparent"
              speed="1"
              id="img"
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
                src="https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?w=2000"
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
                src="https://c1.wallpaperflare.com/preview/710/922/526/chicken-food-lunch-meal.jpg"
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
                src="https://p4.wallpaperbetter.com/wallpaper/156/526/504/chicken-apples-grilled-herbs-wallpaper-preview.jpg"
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
                src="https://c4.wallpaperflare.com/wallpaper/367/822/458/chicken-wings-fried-food-food-cuisine-wallpaper-preview.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Chickens</div>
              </div>
            </div>
          </div>
        </div>

        <div className="infoRes">
          <div className="mainInfo">
            <h3 data-aos="fade-up">Soft Grilled Chickens</h3>
            <p data-aos="fade-up">Austin Texas</p>
            <div className="time" data-aos="fade-up">
              <p id="open">Open Now</p>
              <p>10:00 am - 10:00 pm </p>
            </div>
            <div className="direction" data-aos="fade-up">
              <p>Direction</p>
              <lottie-player
               onClick = {showMap}
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
      <div className="backImgChicken" style={{display:displayMap?"none":'block'}}></div>
      {/** Back IMAGE */}

      <iframe
      style={{display:displayMap?"block":'none'}}
      title="myframe"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A78d8cb9ab194d0ea08e139f0dd8dffe8cff35b340fa2d45310cb14e5f1973280&amp;source=constructor"
        width="90%"
        height="593"
       
      ></iframe>

      {/** BURGER */}
      <div className="meal">
        {food.map((chicken) => {
          return (
            <div key={chicken.id} className="mealCard" data-aos="fade-right">
              <img src={chicken.img} alt="404" />

              <div className="mealInfo">
                <h4>{chicken.nameOfFood}</h4>

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
                  <span className="new">${chicken.newPrice}</span>
                  <span className="old">${chicken.oldPrice}</span>
                </div>
                <p>{chicken.text}</p>
                <button onClick={() => handleClick(chicken)}>
                  Add to Cart
                </button>
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

export default Chicken;
