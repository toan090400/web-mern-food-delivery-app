import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { payShoppingCart } from "../redux/shoppingCartSlice";

import CheckOutPage from "../components/CheckOut/CheckOut";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Checkout = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  // shoppingcart
  const dispatch = useDispatch();
  const shoppingcart = useSelector((state) => state.shoppingCart.cart);
  const accessToken = useSelector((state) => state.auth.user.accessToken);
  // create bill
  const pay = async (value) => {
    const data = await {
      ...value,
      products: shoppingcart,
    };
    try {
      const create = await axios.post(
        "http://localhost:5000/api/bills/create",
        data,
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      );
      dispatch(payShoppingCart());
      const message = await create.data.message;
      toast.success(message);
    } catch (error) {
      console.log(error);
      const err = await error.response.data.message;
      toast.error(err);
    }
  };
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
