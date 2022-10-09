import React, { useState } from "react";
import "../style/payment.scss";
import Tilt from "react-parallax-tilt";
import wifi from "../images/pngwing.com (1).png"
import visa from "../images/visa2.png"
import { useDispatch, useSelector } from "react-redux";
import { addCreditCard } from "../redux/usersReducer";
import ThirdSnackbar from "../componets/ThirdSnackbar";
import {useNavigate} from 'react-router';
function Payment() {
  const [card, setCard] = useState({});
  const [numTil4, setNumTil4] = useState("####");
  const [numTil8, setNumTil8] = useState("####");
  const [numTil12, setNumTil12] = useState("####");
  const [numTil16, setNumTil16] = useState("####");
  const [cv, setCV] = useState("");
  let userName = useSelector((state) => state.loggedinUser.value);
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users.arr); 
  let userInfo = users.find(user => user.username === userName);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate("")
   /**
   * ================================ TO GET NUMBERS AND SEPERATE EACH OF THEM FROM INPUT================================
   */
  const handleKey = (e) => {
    setNumTil4(e.target.value.slice(0, 4));
    setNumTil8(e.target.value.slice(4, 8));
    setNumTil12(e.target.value.slice(8, 12));
    setNumTil16(e.target.value.slice(12, 16));

   


    if (e.target.value.length > 15) {
      e.target.value = e.target.value.slice(0, 16);
    }
  };

  /**
   *
   * ================================ GET CVV ================================
   */
  const getCvv = (e) => {
    setCV(e.target.value.slice(0, 3));
    document.querySelector(".card-box-inner").classList.add("inner");
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3);
    }
  };

  /**
   *================================  TO ROTATE BACKSIDE OF THE CARD================================
   */
  const mouseClick = () => {
    document.querySelector(".card-box-inner").classList.add("inner");
  };

  /**
   *  ================================ TO RETURN FRONTSIDE OF THE CARD ================================
   */
  const mouseLeave = () => {
    document.querySelector(".card-box-inner").classList.remove("inner");
  };

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(card.holder === userInfo.name){
      
      dispatch(addCreditCard({holder:card.holder,  card:card}))
      setCard({})
      setOpen(true)
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/cart')
      }, 3500);
    }

    else{
      setOpen(true)
      setIsSuccess(false)
      setCard({})
      document.getElementById('month').value = "Month"
      document.getElementById('year').value = "Year"
    }
   
   
  };

  return (
    <section className="paymentSec">
      <div className="paymentCont">
         
      <div className="card-box">
        <div className="card-box-inner">
          {/**================================  TILT IS 3D ANIMATION TO SCALE ================================ */}
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={false}
            glareMaxOpacity={0.15}
            scale={1.01}
            
          >
            {/**================================ CARD-FRONT ================================ */}
            <div className="card-box-front">
              <div className="logo">
                <img id="wifi" src= {wifi} alt="404" width="40" height="28" />
                <img src={visa} alt="404" width="84" height="80" />
              </div>

              <div className="numbers">
                <p>{card.number?numTil4.length ===0? "####":numTil4  : "####"}</p>
                <p>{card.number?numTil8.length ===0? "####":numTil8  : "####"}</p>
                <p>{card.number?numTil12.length ===0? "####":numTil12: "####"}</p>
                <p>{card.number?numTil16.length ===0? "####":numTil16: "####"}</p>
              </div>

              <div className="holderName">
                <div className="name">
                  <label>
                    Card Holder
                    <h4>{card.holder}</h4>
                  </label>
                </div>

                <div className="expires">
                  <label>
                    Expires
                    <h4>
                      {" "}
                      <span>{card.month || "MM"}</span> /{" "}
                      <span>{card.year || "YY"}</span>
                    </h4>
                  </label>
                </div>
              </div>
            </div>
            {/**CARD-BACK */}
            <div className="card-box-back">
              <div className="line"></div>

              <div className="cvv">
                <p>CVV</p>
                <br />
                <div className="line2">
                  {card.cvv?cv:""}
                </div>
              </div>

              <img src={visa} alt="404" width="84" height="75" />
            </div>
          </Tilt>
           {/** ================================ END OF TILT =====================================*/}
        </div>
      </div>

        <form onSubmit={handleSubmit}>
          <label>
            Card Number
            <input
              name="number"
              type="number"
              value={card.number || ""}
              onChange={handleChange}
              onInput={handleKey}
              
            />
          </label>
          <label>
            Card Holder
            <input
              name="holder"
              type="text"
              value={card.holder || ""}
              onChange={handleChange}
            />
          </label>

          <div className="monthYear">
            <label>
              Month
              <select name="month" id="month" onChange={handleChange}>
                <option defaultValue>Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </label>

            <label>
              Year
              <select name="year" id="year" onChange={handleChange}>
                <option defaultValue>Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
              </select>
            </label>

            <label>
              CVV
              <input
                type="number"
                name="cvv"
                value={card.cvv || ""}
                onChange={handleChange}
                onInput={getCvv}
                onClick={mouseClick}
                onMouseLeave={mouseLeave}
              />
            </label>
          </div>

          <button
            disabled={
              !card.number ||
              !card.holder ||
              !card.month ||
              !card.year ||
              !card.cvv
            }
          >
            Submit
          </button>
        </form>
      </div>
       

      <ThirdSnackbar open = {open} setOpen = {setOpen} isSuccess = {isSuccess}/>
    </section>
  );
}

export default Payment;
