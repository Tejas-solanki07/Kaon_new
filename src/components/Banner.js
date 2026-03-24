import React from "react";
import "../App.css";
import imgurl from "../images/t4.png";
import imgurl1 from "../images/3.jpeg";
const Banner = () => {
  return (
    <div>
      <div class="container">
        <div class="left">
          <img src={imgurl} alt="Cyber Monday Sale" />
        </div>

        <div class="right">
          <img src={imgurl1} alt="Black Friday Sale" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
