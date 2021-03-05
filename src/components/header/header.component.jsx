import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotosContext } from "../../context/photosContext";

function Header() {
  const { cartItems } = useContext(PhotosContext);

  const className =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-2-line";

  return (
    <div className="header">
      <Link to="/">Pic Some</Link>
      <Link to="/cart">
        <i className={className}></i>
      </Link>
    </div>
  );
}

export default Header;
