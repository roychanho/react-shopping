import React from "react";
import { PRODUCTS } from "../../context/product";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop min-h-screen">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
