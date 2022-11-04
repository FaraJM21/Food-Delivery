import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import "./footer.scss"
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="social-Icons">
        <div>
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

      <ul>
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
