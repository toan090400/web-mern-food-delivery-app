import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import RegisterPage from "../components/Register/Register";
const Register = ({ title }) => {
  // title
  document.title = `${title}`;
  // create
  const createUser = async (value) => {
    const image = await value.image;
    const formData = await new FormData();
    formData.append("username", value.username);
    formData.append("password", value.password);
    formData.append("image", image);
    try {
      const create = await axios.post(
        "http://localhost:5000/api/users/create",
        formData
      );
      const message = await create.data.message;
      toast.success(message);
    } catch (error) {
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
      <RegisterPage createUser={createUser} />
      <Footer />
    </>
  );
};

export default Register;
