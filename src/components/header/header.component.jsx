import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Pic Some</Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-2-line"></i>
      </Link>
    </div>
  );
}

export default Header;
