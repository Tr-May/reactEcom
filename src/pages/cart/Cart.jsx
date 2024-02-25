import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart" style={{ margin: "10px" }}>
      <div className="cart-title">
        <h3>Your Cart Items [Updated]</h3>
      </div>
      <div className="cart-list d-flex flex-wrap gap-2">
        {cartItems.map((item) => {
          const product = PRODUCTS.find((product) => product.id === item.id);
          return <CartItem data={product} qty={item.count} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
