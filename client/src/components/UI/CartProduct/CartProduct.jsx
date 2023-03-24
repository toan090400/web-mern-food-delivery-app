import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/shoppingCartSlice";
const CartProduct = ({ dataProducts }) => {
  const dispatch = useDispatch();
  const handlerAddToCart = (title) => {
    dispatch(addCart(title));
  };
  return (
    <div className="product-foods">
      {dataProducts.map((item) => {
        return (
          <div key={item._id} className="foods-cart">
            <div className="foods-image">
              <img
                src={`${item.images[0].link}/${item.images[0].id}`}
                alt={item.name}
                loading="lazy"
              />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/food-detail/${item.slug}`}>{item.name}</Link>
              </h5>
              <div className="button">
                <span className="product-price">{item.price} VND</span>
                <button
                  onClick={() => handlerAddToCart(item)}
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
