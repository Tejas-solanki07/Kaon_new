import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="/">
        KAON Professional
      </a>
      

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ABOUT US
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#shop">
              SHOP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#media">
              MEDIA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-icons ">
        <a href="#d" className="mr-4">
          <i className="fas fa-search"></i>
        </a>
        <a href="#d" className="mr-4">
          <i className="fas fa-user"></i>
        </a>
        <a href="#d" className="mr-4">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
      <button
        className="navbar-toggler tgbtn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"><i class='bx bx-menu'></i></span>
      </button>
    </nav>
  );
}

export default Navbar;
