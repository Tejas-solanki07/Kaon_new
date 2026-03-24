import React from "react";
import "../App.css";
import imgurl1 from "../images/02.jpeg";
import imgurl2 from "../images/k2.jpeg";
import imgurl3 from "../images/2522.jpeg";
import imgurl4 from "../images/mcon.jpeg";
import imgurl5 from "../images/03.jpeg";
import imgurl6 from "../images/ms03.jpeg";
import imgurl7 from "../images/mc4.jpeg";
import imgurl8 from "../images/01.jpeg";
import imgurl9 from "../images/c1.jpeg";
import imgurl10 from "../images/cys.jpeg";
import imgurl11 from "../images/blutox.jpeg";
import imgurl12 from "../images/mask.jpeg";

const ProductGride = () => {
  return (
    <>
      <div className="textprod" id="shop">
        <h2>Best Seller</h2>
        <h3>Browse the collection of our new products.</h3>
      </div>
      <div class="product-grid">
        <div class="product-item">
          <img src={imgurl3} alt="Product 3" />
          <h3>Keratin bote-x keratin </h3>
          <div className="paraprod">
            <p>Mini kit 100 ml</p>
            <p>₹2450 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl8} alt="Product 3" />
          <h3>Clarifying shampoo</h3>
          <div className="paraprod">
            <p>250 ml</p>
            <p>₹500 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl9} alt="Product 3" />
          <h3>Clarifying shampoo </h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹1000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl1} alt="Product 1" />
          <h3>Keratin bote-x treatment</h3>
          <div className="paraprod">
            <p>250 ml</p>
            <p>₹3100 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl2} alt="Product 2" />
          <h3>Keratin bote-x hair treatment</h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹10,000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>

        <div class="product-item">
          <img src={imgurl7} alt="Product 3" />
          <h3>Moisturizing conditioner</h3>
          <div className="paraprod">
            <p>250 ml</p>
            <p>₹700 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl5} alt="Product 3" />
          <h3>Moisturizing shampoo</h3>
          <div className="paraprod">
            <p>250 ml</p>
            <p>₹750 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl6} alt="Product 3" />
          <h3>Moisturizing shampoo</h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹2000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl4} alt="Product 3" />
          <h3>Moisturizing conditioner </h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹2000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>

        <div class="product-item">
          <img src={imgurl10} alt="Product 3" />
          <h3>CYSTEINE hair treatment </h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹26,000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl11} alt="Product 3" />
          <h3>BLUETOX hair repair treatment</h3>
          <div className="paraprod">
            <p>1000 ml</p>
            <p>₹15,000 </p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
        <div class="product-item">
          <img src={imgurl12} alt="Product 3" />
          <h3>Argan hair Mask </h3>
          <div className="paraprod">
            <p>200 ml </p>
            <p>₹850 </p>
            <p>500ml</p>
            <p>₹1650</p>
          </div>
          <button className="prodbtn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default ProductGride;
