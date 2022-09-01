import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Product = (product) => {
  const { id, title, price, image } = product;
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>${price}</h3>
      </div>
      <div className="buttons">
        <Link to={`/products/${id}`}>Product details</Link>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
