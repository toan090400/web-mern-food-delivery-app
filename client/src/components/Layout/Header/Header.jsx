import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuBar, shoppingCard } from "../../../redux/styleSlice";
import { deleteProduct } from "../../../redux/shoppingCartSlice";

import logo from "../../../assets/images/res-logo.png";
import product02 from "../../../assets/images/product_2.1.jpg";
const Header = ({ link }) => {
  const styles = useSelector((state) => state.styles);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  console.log(shoppingCart);
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
              <Link
                to={`/contact`}
                className={link === "contact" ? "link open" : "link"}
              >
                Contact
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
            <div className="info-login">
              <Link to={`/login`} className="link">
                <i className="fa-regular fa-user"></i>
              </Link>
            </div>
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
        className={styles.shoppingCard ? "shopping-cart" : "shopping-cart open"}
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
                      <img src={product02} alt="product" loading="lazy" />
                    </div>
                    <div className="product-item">
                      <p>
                        {item.name} <span>X 1</span>
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
                    <p>{item.price}</p>
                  </div>
                  <div className="quatity-item">
                    <i className="fa-solid fa-plus"></i>
                    <span>1</span>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total-price">
            <div className="price">
              <h5>
                Total: <span>{shoppingCart.total}</span>
              </h5>
            </div>
            <div className="checkout">
              <Link to={`/`}>Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
