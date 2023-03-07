import React from "react";
import CartPage from "../components/Cart/Cart";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Cart = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  return (
    <>
      <Header link="cart" />
      <CartPage />
      <Footer />
    </>
  );
};

export default Cart;
