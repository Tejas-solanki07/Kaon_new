import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <div className="container3">
        <footer className="footer">
          <div className="footer-section">
            <h3>KAON Professional</h3>
            <p>From the innovators of the smoothing industry.</p>
            <p>
              KAON Professional helps you achieve stronger, healthier hair with
              our line of keratin treatments and salon-quality hair care
              products.
            </p>
          </div>

          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#shop">Products</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              1 176 2104 , Surya Apartment, Parasnagar Sola Road , Naranpura,
              Ahmedabad, Gujrat
            </p>
            <p>(+91) 756 787 6645</p>
            <p>
              <a href="mailto:info@KAONprofessional.com">
                brandrichprofessional@gamil.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/kaonprofessional?igsh=MWp3YjY1eXdibzMzZQ=="
                className="social-icon"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1H2CryquPi/"
                className="social-icon"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
        </footer>
        <a
          href="https://wa.me/message/YOGUP5HF3AHNL1"
          id="fixedWhatsAppIcon"
          className="wow zoomIn"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
        <div className="copyright">
          Copyright © 2024 By Brandrich Professional Cosmetics Pvt. Ltd.
          <br />
          <a href="#d">Privacy Policy</a> | <a href="#d">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
