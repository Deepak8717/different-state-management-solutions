import React from "react";
import { Link } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  let totalQuanty = 0;
  cart.cartItems.length > 0 &&
    cart.cartItems.map((item) => {
      totalQuanty += item.quantity;
    });
  console.log(totalQuanty, cart.cartItems);
  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/">Products</Link>
        <Link to="/cart" className="cart">
          <IoBag />
          {cart.cartItems.length !== 0 && <span>{totalQuanty}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
