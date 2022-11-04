import React, { useEffect } from "react";
import burger from "../../assets/images/5a35e097637df0 2.svg";
import hotdog from "../../assets/images/hotdog.png";
import free from "../../assets/images/freee.png";
import "./home.scss";
import { MdStar } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import useHomeDetails from "../../hooks/useHomeDetails";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const [
    windowWidth,
    foodsArray,
    displayAll,
    displayBurger,
    displayCake,
    displayChicken,
    displayFish,
    displayPizza,
    displaySandwich,
    displaySoup,
    displayDrinks,
  ] = useHomeDetails();

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10 });
  }, []);

  return (
    <main>
      <div className="ellipse"></div>

      {/** HOME SECTION START */}
      <section className="home">
        {/** HOME MAIN PART START  */}
        <div className="home-cont">
          <div>
            <Tilt
              className="track-on-window"
              perspective={2000}
              scale={1.02}
              trackOnWindow={true}
            >
              <div
                data-aos={windowWidth < 1200 ? "" : "zoom-out"}
                data-aos-anchor=".other-element"
                className="inner-element"
              >
                <img className="hotdog" src={hotdog} alt="404" width="200" />
              </div>
            </Tilt>

            <div
              data-aos={windowWidth < 1200 ? "" : "fade-right"}
              data-aos-anchor=".other-element"
              className="home-title"
            >
              <h1>
                GET DELICIOUS FOOD <br />
                AT YOUR DOORSTEPS{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                elementum diam lacus, magnis. Diam tempus lorem laoreet mattis
                orci sagittis velit. Amet scelerisque diam non quis amet
                adipiscing.
              </p>
              <button>Order Now</button>
            </div>
          </div>

          <div className="pics">
            <div data-aos="zoom-in" className="card">
              <img src={burger} alt="404" />
            </div>

            <div data-aos="zoom-in" className="card1">
              <img src={hotdog} alt="404" />
            </div>

            <div data-aos="zoom-in" className="card2">
              <img src={free} alt="404" />
            </div>
          </div>

          <Tilt
            className="track-window"
            perspective={2000}
            scale={1.02}
            trackOnWindow={true}
          >
            <img
              data-aos={windowWidth < 1200 ? "" : "zoom-out"}
              data-aos-anchor=".other-element"
              className="ellipse-2"
              src={free}
              alt="404"
            />
          </Tilt>
        </div>
        {/** HOME MAIN PART END  */}

        {/** FOOD CATEGORY START */}
        <div className="food-categories">
          <h3 data-aos={"fade-up"}>Choose from your favourite category</h3>

          {/** FOODS ICON START */}
          <div className="food-icons">
            <div className="iconDiv" onClick={displayAll}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets2.lottiefiles.com/temp/lf20_nXwOJj.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>All</figcaption>
            </div>

            <div className="iconDiv" onClick={displayPizza}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets10.lottiefiles.com/packages/lf20_o6nx4jow.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Pizza</figcaption>
            </div>

            <div className="iconDiv" onClick={displayDrinks}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets1.lottiefiles.com/packages/lf20_dB6KiuDKrw.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Drinks</figcaption>
            </div>

            <div className="iconDiv" onClick={displayBurger}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets6.lottiefiles.com/packages/lf20_iq8BN6.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Burger</figcaption>
            </div>

            <div className="iconDiv" onClick={displayChicken}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets10.lottiefiles.com/packages/lf20_rzxphiic.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>

              <figcaption>Chicken</figcaption>
            </div>

            <div className="iconDiv" onClick={displayFish}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets7.lottiefiles.com/packages/lf20_jhxquorq.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Fish</figcaption>
            </div>

            <div className="iconDiv" onClick={displaySandwich}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets3.lottiefiles.com/packages/lf20_cuiimqyu.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Sandwich</figcaption>
            </div>

            <div className="iconDiv" onClick={displaySoup}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets3.lottiefiles.com/packages/lf20_yd74sizh.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Soup and Noodles</figcaption>
            </div>

            <div className="iconDiv" onClick={displayCake}>
              <lottie-player
                id="foodIcon"
                data-aos={"fade-right"}
                src="https://assets4.lottiefiles.com/packages/lf20_m3Lba3.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <figcaption>Cake</figcaption>
            </div>
            <div className="backpic"></div>
          </div>
          {/** FOODS ICON END */}

          {/** FOODS CONTAINER START */}
          <div className="food-container">
            {foodsArray.map((food) => {
              return (
                <div key={food.id} className="foodCard" data-aos="zoom-out">
                  <img src={food.img} alt="404" />
                  <div className="foodInfo">
                    <h4>{food.nameOfFood}</h4>
                    <i>{food.category}</i>
                    <div className="price">
                      <span className="old">${food.oldPrice}</span>
                      <span className="new">${food.newPrice}</span>
                    </div>
                    <i id="star">
                      <MdStar color="yellow" fill="yellow" />
                    </i>
                    <i id="star">
                      <MdStar color="yellow" fill="yellow" />
                    </i>
                    <i id="star">
                      <MdStar color="yellow" fill="yellow" />
                    </i>
                    <i id="star">
                      <MdStar color="yellow" fill="yellow" />
                    </i>
                    <i id="star">
                      <MdStar color="yellow" fill="yellow" />
                    </i>
                  </div>
                </div>
              );
            })}
          </div>
          {/** FOODS CONTAINER END */}
        </div>
        {/** FOOD CATEGORY END */}

        {/** Carousel */}

        {/** Carousel */}
      </section>
      {/** HOME SECTION END */}
    </main>
  );
}

export default Home;
