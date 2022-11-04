import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss"
function ErrorPage() {
  return (
    <div className="errorPage">
      <lottie-player
        id = "pageAnim"
        src="https://assets4.lottiefiles.com/packages/lf20_cr9slsdh.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
      <div className="infoPage">
        <h4>Oooops! This page doesn't exist</h4>
       <Link to={"/"} id = "btn"> <button>Back to home</button>  </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
