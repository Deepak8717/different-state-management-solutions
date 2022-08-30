import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reStartCart } from "./store/cartSlice";

const Header = () => {
  const [cartCollapsed, setCartCollapsed] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    setCartCollapsed(true);
  };
  const closeCartHandler = () => {
    setCartCollapsed(false);
  };
  return (
    <div className="header">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-parent">
        <h1 onClick={handleOnClick}>
          Cart(<span style={{ color: "aqua" }}>{products.length}</span>)
        </h1>

        {cartCollapsed && (
          <div className="cart-container">
            <button className="btn-cart-exit" onClick={closeCartHandler}>
              X
            </button>
            {products.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              <div style={{ marginTop: "50px" }}>
                {products.map((product, i) => {
                  return (
                    <div key={i} style={{ margin: "5px", border: "1px solid" }}>
                      <p>
                        {product.name}-${product.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {products.length === 0 ? (
              <></>
            ) : (
              <div
                style={{
                  background: "black",
                  width: "50%",
                  margin: "0 auto",
                  padding: "5px",
                  color: "#fff",
                }}
                onClick={() => dispatch(reStartCart())}
              >
                Clear Cart
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
