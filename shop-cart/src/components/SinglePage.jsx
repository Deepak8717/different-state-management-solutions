import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const SinglePage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setError(null);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);
  const { title, price, description, category, image } = product;
  return (
    <div className="SingleProduct container">
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <div className="left-div">
            <img src={image} alt={title} />
          </div>
          <div className="right-div">
            <h2 className="title">{title}</h2>
            <h3 className="category">{category}</h3>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePage;
