import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuBar } from "../../../redux/styleSlice";
import logo from "../../../assets/images/res-logo.png";
const Header = ({ link }) => {
  console.log(link);
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const handlerClickBar = () => {
    dispatch(menuBar());
  };
  const handlerClickBarClose = () => {
    dispatch(menuBar());
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
              <i className="fa-solid fa-cart-shopping"></i>
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
            onClick={handlerClickBarClose}
            className="fa-solid fa-circle-xmark"
          ></i>
        </div>
      </div>
    </>
  );
};

export default Header;
