import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="navContainer">
      <Link to="/">React Shop</Link>
      <nav class="">
        <ul class="flex">
          <li class="mr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Shop
            </NavLink>
          </li>
          <li class="mr-6">
            <NavLink to="/aboutUs">AboutUs</NavLink>
          </li>
          <li class="mr-6">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <div className="links">
        <span className="">{cartQuantity}</span>
        <Link to="/cart">
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
