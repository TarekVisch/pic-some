import React, { useContext, useState } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import { PhotosContext } from "../../context/photosContext";

import "./cart.styles.scss";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(PhotosContext);
  const cost = 5.99 * cartItems.length;
  const totalCost = cost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      emptyCart();
      setButtonText("Place Order");
    }, 3000);
  }

  return (
    <div className="cart__page">
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p className="cart__cost">Total Cost: {totalCost}</p>
      {cartItems.length > 0 ? (
        <div className="cart__button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p className="cart__empty">You cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;
