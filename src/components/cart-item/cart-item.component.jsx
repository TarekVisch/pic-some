import React, { useContext } from "react";
import { PhotosContext } from "../../context/photosContext";

import "./cart-item.styles.scss";

function CartItem({ item }) {
  const { removeFromCart } = useContext(PhotosContext);

  return (
    <div className="cart__item">
      <i
        className="ri-delete-bin-line cart__delete"
        onClick={() => removeFromCart(item.id)}
      ></i>
      <div className="cart__image">
        <img src={item.url} alt={item.alt} />
      </div>
      <p className="cart__price">$5.99</p>
    </div>
  );
}

export default CartItem;
