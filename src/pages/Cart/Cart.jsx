import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
