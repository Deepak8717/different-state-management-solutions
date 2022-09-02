import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";
const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }
  return (
    <div className="Cart container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="product-title cart-amount-footer">
        <button onClick={() => dispatch(clearCart())}>Clear All</button>
        <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
