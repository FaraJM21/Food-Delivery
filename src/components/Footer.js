import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";


function Footer() {
  let windowWidth  = useSelector(state => state.window.value)
  let canvas = useSelector((state) => state.offcanvas.isOpen);
  return (
    <footer style={ windowWidth <=670 ? {paddingLeft : "0"}:{paddingLeft: canvas ? "250px": "0"}}> 
      <div className="social-Icons"  >
        <div >
          <i>
            <BsInstagram />
          </i>
          <i>
            <BsFacebook />
          </i>
          <i>
            <BsTwitter />
          </i>
          <i>
            <BsYoutube />
          </i>
        </div>
        <br />

        <h5>
          Copyright © 2020 Food delivery website <br />
          All rights reserved
        </h5>
      </div>

      <ul >
        <h4>Company</h4>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>

      <ul>
        <h4>Support</h4>
        <li>Help Center</li>
        <li>Terms of Service</li>
        <li>Legal</li>
        <li>Privcy Policy</li>
        <li>Status</li>
      </ul>

      <div className="emailBox">
        <h4>Stay up to date</h4>
        <label>
          <input type="email" placeholder="  Your email address" />
          <i>
            <FiSend />
          </i>
        </label>
      </div>
    </footer>
  );
}

export default Footer;
