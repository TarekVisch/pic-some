import React from "react";

import "./cart-item.styles.scss";

function CartItem({ item }) {
  return (
    <div className="cart__item">
      <i class="ri-delete-bin-line cart__delete"></i>
      <div className="cart__image">
        <img src={item.url} alt={item.alt} />
      </div>
      <p className="cart__price">$5.99</p>
    </div>
  );
}

export default CartItem;
