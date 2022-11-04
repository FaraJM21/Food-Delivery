import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";
import "./restaurants.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Snackbars from "../../components/Snackbars";
import SecondSnackbar from "../../components/SecondSnackbar";
import useFoods from "../../hooks/useFoods";

function Cakes() {
  const [
    food,
    open,
    isOrdered,
    foodName,
    handleClick,
    setOpen,
    setIsOrdered,
    showMap,
    displayMap,
  ] = useFoods("Cake");

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);

  return (
    /** RESTAURANT CONT */
    <div className="mealsCont">
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
              mode="bounce"
              data-aos={"fade-right"}
              src="https://assets4.lottiefiles.com/packages/lf20_m3Lba3.json"
              background="transparent"
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
                src="https://wallpaperaccess.com/full/3759320.jpg"
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
                src="https://wallpaperaccess.com/full/1230653.jpg"
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
                src="https://wallpaperaccess.com/full/1986106.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Yummy</div>
              </div>
            </div>

            <div
              className="cont"
              data-aos="zoom-in-left"
              data-aos-anchor=".other-element"
            >
              <img
                src="https://i.ytimg.com/vi/jFjAb_V9f-o/maxresdefault.jpg"
                alt="404"
              />
              <div className="overlay">
                <div className="text">Sweets</div>
              </div>
            </div>
          </div>
        </div>

        <div className="infoRes">
          <div className="mainInfo">
            <h3 data-aos="fade-up">Yummy Dessert</h3>
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
        className="backImgCake"
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

      {/** BURGER */}
      <div className="meal">
        {food.map((cake) => {
          return (
            <div key={cake.id} className="mealCard" data-aos="fade-right">
              <img src={cake.img} alt="404" />

              <div className="mealInfo">
                <h4>{cake.nameOfFood}</h4>

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
                  <span className="new">${cake.newPrice}</span>
                  <span className="old">${cake.oldPrice}</span>
                </div>
                <p>{cake.text}</p>
                <button onClick={() => handleClick(cake)}>Add to Cart</button>
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

export default Cakes;
