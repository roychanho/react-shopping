import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="cartItem">
      <header>
        <h3>{title}</h3>
        <div className="">
          ${total.toFixed(2)}
          <span className="">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="">
        <div className="">
          x <span>{quantity}</span>
        </div>
        <div className="">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
