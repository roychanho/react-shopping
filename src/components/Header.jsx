import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/">React Shop</Link>
      <div className="links">
        <Link to="/cart">
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
