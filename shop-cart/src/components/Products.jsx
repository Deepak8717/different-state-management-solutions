import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import Loading from "./Loading";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="Products container">
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => {
          return <Product key={product.id} {...product} />;
        })
      )}
    </div>
  );
};

export default Products;
