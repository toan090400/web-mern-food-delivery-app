import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseProduct,
  deincreaseProduct,
  deleteProduct,
} from "../../redux/shoppingCartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const cart = shoppingCart.cart;
  const total = shoppingCart.total;
  const handlerIncreaseProduct = (data) => {
    dispatch(increaseProduct(data));
  };
  const handlerDeincreaseProduct = (data) => {
    dispatch(deincreaseProduct(data));
  };
  const handlerDeleteProduct = (data) => {
    dispatch(deleteProduct(data));
  };
  return (
    <div className="cart-page">
      <div className="admin-table">
        <div className="admin-header">
          <h2>Cart</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td data="Name">{item.name}</td>
                  <td data="Image">
                    <div className="images">
                      <div className="images-item">
                        <img
                          className="image"
                          src={`${item.link}/${item.image}`}
                          alt={item.name}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </td>
                  <td data="Price">
                    {Intl.NumberFormat().format(item.price)}
                    <span> VND</span>
                  </td>
                  <td data="Quantity">
                    <div className="cart-quantity">
                      <div className="increase">
                        <i
                          onClick={() => handlerIncreaseProduct(item.id)}
                          className="fa-solid fa-plus"
                        ></i>
                      </div>
                      <div className="quantity">
                        <h3>{item.quantity}</h3>
                      </div>
                      <div className="derease">
                        <i
                          onClick={() => handlerDeincreaseProduct(item.id)}
                          className="fa-solid fa-minus"
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td data="Total">
                    {Intl.NumberFormat().format(item.totalProduct)}
                    <span> VND</span>
                  </td>
                  <td data="Delete">
                    <div className="icon-delete">
                      <i
                        onClick={() => handlerDeleteProduct(item.id)}
                        className="fa-solid fa-trash"
                      ></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="checkout">
        <div className="total">
          <p>
            Total: {Intl.NumberFormat().format(total)}
            <span> VND</span>
          </p>
        </div>
        <div className="checkout">
          <Link to={`/checkout`}>Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
