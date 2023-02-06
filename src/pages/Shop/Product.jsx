import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import "./Product.css";

const Product = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
      <button className="addToCartButton" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
