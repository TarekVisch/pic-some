import React, { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import { PhotosContext } from "../../context/photosContext";

import "./cart.styles.scss";

function Cart() {
  const { cartItems } = useContext(PhotosContext);

  return (
    <div className="cart__page">
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Cost: ???</p>
      <div className="cart__button">
        <button>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
