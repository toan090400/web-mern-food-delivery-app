import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuBar, shoppingCard } from "../../../redux/styleSlice";

import logo from "../../../assets/images/res-logo.png";
import product02 from "../../../assets/images/product_2.1.jpg";
const Header = ({ link }) => {
  const styles = useSelector((state) => state.styles);
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
              <span>0</span>
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
            <div className="card-item">
              <div className="data-item">
                <div className="image-item">
                  <img src={product02} alt="product" loading="lazy" />
                </div>
                <div className="product-item">
                  <p>
                    Product 01 <span>X 2</span>
                  </p>
                </div>
              </div>
              <div className="item-price">
                <p>123123</p>
              </div>
              <div className="quatity-item">
                <i class="fa-solid fa-plus"></i>
                <span>1</span>
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <div className="card-item">
              <div className="data-item">
                <div className="image-item">
                  <img src={product02} alt="product" loading="lazy" />
                </div>
                <div className="product-item">
                  <p>
                    Product 01 <span>X 2</span>
                  </p>
                </div>
              </div>
              <div className="item-price">
                <p>123123</p>
              </div>
              <div className="quatity-item">
                <i class="fa-solid fa-plus"></i>
                <span>1</span>
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <div className="card-item">
              <div className="data-item">
                <div className="image-item">
                  <img src={product02} alt="product" loading="lazy" />
                </div>
                <div className="product-item">
                  <p>
                    Product 01 <span>X 2</span>
                  </p>
                </div>
              </div>
              <div className="item-price">
                <p>123123</p>
              </div>
              <div className="quatity-item">
                <i class="fa-solid fa-plus"></i>
                <span>1</span>
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>
          <div className="total-price">
            <div className="price">
              <h5>
                Total: <span>1231345</span>
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
