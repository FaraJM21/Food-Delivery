import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdStar } from "react-icons/md";
import "./restaurants.scss";
import products from "../../assets/images/products.png";
import chef from "../../assets/images/chef.png";
import payment from "../../assets/images/payment.png";
import delivery from "../../assets/images/delivery.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getWidth } from "../../redux/windowWidthReducer";

function Restaurants() {
  let windowWidth = useSelector((state) => state.window.value);
  let dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 3000, delay: 40 });
  }, []);

  const mouseEnter = () => {
    dispatch(getWidth(window.innerWidth));
  };

  return (
    <>
      <section onMouseEnter={mouseEnter} className="restaurants">
        <Link
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/burgers"}
          className="restaurantPage"
        >
          <div id="burger">
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/889/1019/598/food-burger-french-fries-still-life-wallpaper-preview.jpg"
              alt="404"
            />
            <div className="info">
              <h4>Mindels Burger and Fries</h4>
              <p>$159 for two</p>
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
        </Link>

        <Link
          className="restaurantPage"
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/pizza"}
        >
          <div id="pizza">
            <img
              src="https://ae01.alicdn.com/kf/H6e4355c296764229b3ccbbf2bdbe7a53R/Custom-mural-3d-photo-wallpaper-Hand-painted-Italian-Pizza-Western-Restaurant-decor-living-room-wall-paper.jpg_Q90.jpg_.webp"
              alt="404"
            />
            <div className="info">
              <h4>Italian pizza</h4>
              <p>$120 for two</p>
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
        </Link>

        <Link
          className="restaurantPage"
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/soups"}
        >
          <div id="soup">
            <img
              src="https://assets.site-static.com/blogphotos/1621/6346-italian-food-in-durango.jpg"
              alt="404"
            />
            <div className="info">
              <h4>Italiano Restaurant</h4>
              <p>$102 for two</p>
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
        </Link>

        <Link
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/chickens"}
          className="restaurantPage"
        >
          <div id="chicken">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2021/08/One-pot-spiced-roast-chicken-05079e9.jpg"
              alt="404"
            />
            <div className="info">
              <h4>Soft Chickens</h4>
              <p>$120 for two</p>
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
        </Link>

        <Link
          className="restaurantPage"
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/cakes"}
        >
          <div id="cake">
            <img
              src="https://w0.peakpx.com/wallpaper/651/638/HD-wallpaper-yummy-deserts-cool-food-yummy-entertainment-fun-desserts.jpg"
              alt="404"
            />
            <div className="info">
              <h4>Yummy Dessert</h4>
              <p>$90 for two</p>
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
        </Link>

        <Link
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          to={"/cocktails"}
          className="restaurantPage"
        >
          <div id="cocktail">
            <img
              src="https://images4.alphacoders.com/268/thumb-1920-268154.jpg"
              alt="404"
            />
            <div className="info">
              <h4>Urban Juice Cafe</h4>
              <p>$159 for two</p>
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
        </Link>

        <div className="about">
          <div data-aos={windowWidth < 1200 ? "" : "fade-left"} className="box">
            <h2>
              All products are natural soft and testy. <br /> Eat Drink and
              Enjoy
            </h2>
            <img src={products} alt="404" />
          </div>

          <div
            data-aos={windowWidth < 1200 ? "" : "fade-right"}
            className="box"
          >
            <img src={chef} alt="404" />
            <h2>
              All chefs are profeesional with expirience <br /> 10 year
            </h2>
          </div>

          <div data-aos={windowWidth < 1200 ? "" : "fade-left"} className="box">
            <h2>
              No need spent time. <br /> The fastest way to pay with in a app
            </h2>
            <img src={payment} alt="404" />
          </div>

          <div
            data-aos={windowWidth < 1200 ? "" : "fade-right"}
            className="box"
          >
            <img src={delivery} alt="404" />
            <h2>
              24/7 fast and free <br /> delivery service for you
            </h2>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Restaurants;
