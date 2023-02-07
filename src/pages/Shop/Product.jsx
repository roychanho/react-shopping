import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import "./Product.css";

const Product = (props) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const amountInputRef = useRef();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  const onChangeHandler = (evt) => {
    setAmount(evt.target.value);
  };

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
      {/* <div className="input">
        <label>Amount</label>
        <input
          ref={amountInputRef}
          onChange={onChangeHandler}
          id={"amount_" + id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div> */}
      <button className="addToCartButton" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
