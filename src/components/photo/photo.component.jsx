import React, { useState, useContext } from "react";
import { PhotosContext } from "../../context/photosContext";

import "./photo.styles.scss";

function Photo({ img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleLike, cartItems, addToCart, removeFromCart } = useContext(
    PhotosContext
  );

  function heartIcon() {
    if (img.isLiked) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleLike(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleLike(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const inCart = cartItems.some((item) => item.id === img.id);
    if (inCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`image__container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt={img.alt} className="image__item" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Photo;
