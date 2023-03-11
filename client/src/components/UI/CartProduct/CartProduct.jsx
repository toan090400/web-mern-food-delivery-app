import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import product01 from "../../../assets/images/product_01.1.jpg";
import product02 from "../../../assets/images/product_2.1.jpg";
import product03 from "../../../assets/images/product_3.1.jpg";
import { addCart } from "../../../redux/shoppingCartSlice";
const CartProduct = () => {
  const dispatch = useDispatch();
  const handlerAddToCart = (title) => {
    if (title === "1") {
      const data = {
        id: 1,
        name: "Product 01",
        price: 1000,
      };
      dispatch(addCart(data));
    }
    if (title === "2") {
      const data = {
        id: 2,
        name: "Product 02",
        price: 2000,
      };
      dispatch(addCart(data));
    }
    if (title === "3") {
      const data = {
        id: 3,
        name: "Product 03",
        price: 3000,
      };
      dispatch(addCart(data));
    }
    if (title === "4") {
      const data = {
        id: 4,
        name: "Product 04",
        price: 4000,
      };
      dispatch(addCart(data));
    }
  };
  return (
    <div className="product-foods">
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product01} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">1000 VND</span>
            <button
              onClick={() => handlerAddToCart("1")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product03} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 02</Link>
          </h5>
          <div className="button">
            <span className="product-price">2000 VND</span>
            <button
              onClick={() => handlerAddToCart("2")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 03</Link>
          </h5>
          <div className="button">
            <span className="product-price">3000 VND</span>
            <button
              onClick={() => handlerAddToCart("3")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product03} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 04</Link>
          </h5>
          <div className="button">
            <span className="product-price">4000 VND</span>
            <button
              onClick={() => handlerAddToCart("4")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 05</Link>
          </h5>
          <div className="button">
            <span className="product-price">5000 VND</span>
            <button
              onClick={() => handlerAddToCart("3")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="foods-cart">
        <div className="foods-image">
          <img src={product03} alt="product01" loading="lazy" />
        </div>
        <div className="foods-content">
          <h5>
            <Link to={`/`}>Product 06</Link>
          </h5>
          <div className="button">
            <span className="product-price">6000 VND</span>
            <button
              onClick={() => handlerAddToCart("4")}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
