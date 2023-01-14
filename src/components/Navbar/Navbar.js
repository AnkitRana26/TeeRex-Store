import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>TeeRex Store</h1>
      <div>
        <h3 id="navbarSubHead">Products</h3>
        <div id="cartIconContainer">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>0</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
