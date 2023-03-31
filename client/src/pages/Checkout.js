import React from "react";
import { ToastContainer, toast } from "react-toastify";
import CheckOutPage from "../components/CheckOut/CheckOut";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Checkout = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  // create bill
  const pay = async (value) => {
    console.log(value);
  };
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <CheckOutPage pay={pay} />
      <Footer />
    </>
  );
};

export default Checkout;
