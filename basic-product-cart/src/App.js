import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reStartCart } from "./store/cartSlice";
import { products } from "./products";
import Header from "./Header";

function App() {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="App">
        {products.map((product) => {
          return (
            <div key={product.id} className="cart">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                className="btn-add-cart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
