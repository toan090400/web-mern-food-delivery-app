import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuBar, shoppingCard } from "../../../redux/styleSlice";
import { logoutData } from "../../../redux/authSlice";
import {
  increaseProduct,
  deincreaseProduct,
  deleteProduct,
} from "../../../redux/shoppingCartSlice";

import logo from "../../../assets/images/res-logo.png";
const Header = ({ link }) => {
  const styles = useSelector((state) => state.styles);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handlerClickBar = () => {
    dispatch(menuBar());
  };
  const handlerClickShoppingCard = () => {
    dispatch(shoppingCard());
  };
  const handlerClickMenuBarClose = () => {
    dispatch(menuBar());
  };
  const handlerClickShoppingCardBarClose = () => {
    dispatch(shoppingCard());
  };
  const handlerDeleteProduct = (data) => {
    dispatch(deleteProduct(data));
  };
  const handlerIncreaseProduct = (data) => {
    dispatch(increaseProduct(data));
  };
  const handlerDeincreaseProduct = (data) => {
    dispatch(deincreaseProduct(data));
  };
  // logout
  const handlerClickLogout = () => {
    dispatch(logoutData());
  };
  return (
    <>
      <div className="header">
        <div className="header-chill">
          <div className="header-logo">
            <div className="logo-image">
              <img src={logo} alt="header-logo" loading="lazy" />
            </div>
            <div className="logo-text">
              <p className="text">Tasty Treat</p>
            </div>
          </div>
          <div className="header-link">
            <div className="link-are">
              <Link to={`/`} className={link === "home" ? "link open" : "link"}>
                Home
              </Link>
              <Link
                to={`/all-foods`}
                className={link === "foods" ? "link open" : "link"}
              >
                Foods
              </Link>
              <Link
                to={`/cart`}
                className={link === "cart" ? "link open" : "link"}
              >
                Cart
              </Link>
            </div>
          </div>
          <div className="header-info">
            <div className="info-cart">
              <i
                onClick={handlerClickShoppingCard}
                className="fa-solid fa-cart-shopping"
              ></i>
              <span>{shoppingCart.quantityItem}</span>
            </div>
            {auth.user ? (
              <>
                {auth.user.isAdmin && (
                  <div className="info-login">
                    <Link
                      to={auth.user.isAdmin ? `/admin/categorys` : `/`}
                      className="link"
                    >
                      <i className="fa-solid fa-user-gear"></i>
                    </Link>
                  </div>
                )}

                <div className="info-login">
                  <i
                    onClick={handlerClickLogout}
                    className="fa-solid fa-right-from-bracket"
                  ></i>
                </div>
              </>
            ) : (
              <div className="info-login">
                <Link to={`/login`} className="link">
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
            )}
            <div className="info-bar">
              <i onClick={handlerClickBar} className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menuBar ? "menu-bar open" : "menu-bar"}>
        <div className="bar-are">
          <Link to={`/`} className={link === "home" ? "link open" : "link"}>
            Home
          </Link>
          <Link
            to={`/all-foods`}
            className={link === "foods" ? "link open" : "link"}
          >
            Foods
          </Link>
          <Link to={`/cart`} className={link === "cart" ? "link open" : "link"}>
            Cart
          </Link>
          <Link
            to={`/contact`}
            className={link === "contact" ? "link open" : "link"}
          >
            Contact
          </Link>
        </div>
        <div className="bar-close">
          <i
            onClick={handlerClickMenuBarClose}
            className="fa-solid fa-circle-xmark"
          ></i>
        </div>
      </div>
      <div
        className={styles.shoppingCard ? "shopping-cart open" : "shopping-cart"}
      >
        <div className="cart-chill">
          <div
            onClick={handlerClickShoppingCardBarClose}
            className="button-close"
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
          <div className="card">
            {shoppingCart.cart.map((item) => {
              return (
                <div key={item.id} className="card-item">
                  <div className="data-item">
                    <div className="image-item">
                      <img
                        src={`${item.link}/${item.image}`}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="product-item">
                      <p>
                        {item.name} <span>X {item.quantity}</span>
                      </p>
                    </div>
                    <div className="product-delete">
                      <i
                        onClick={() => handlerDeleteProduct(item.id)}
                        className="fa-solid fa-circle-xmark"
                      ></i>
                    </div>
                  </div>
                  <div className="item-price">
                    <p>Price: {Intl.NumberFormat().format(item.price)} VND</p>
                    <p>
                      Total: {Intl.NumberFormat().format(item.totalProduct)} VND
                    </p>
                  </div>
                  <div className="quatity-item">
                    <i
                      onClick={() => handlerIncreaseProduct(item.id)}
                      className="fa-solid fa-plus"
                    ></i>
                    <span>{item.quantity}</span>
                    <i
                      onClick={() => handlerDeincreaseProduct(item.id)}
                      className="fa-solid fa-minus"
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total-price">
            <div className="price">
              <h5>
                Total:{" "}
                <span>
                  {Intl.NumberFormat().format(shoppingCart.total)} VND
                </span>
              </h5>
            </div>
            <div className="checkout">
              <Link to={`/checkout`}>Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
