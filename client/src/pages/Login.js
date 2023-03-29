import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginData } from "../redux/authSlice";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import LoginPage from "../components/Login/Login";
const Login = ({ title }) => {
  // title
  document.title = `${title}`;
  // create
  const createUser = async (value) => {
    const image = await value.image[0];
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
  // login
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = async (value) => {
    try {
      const login = await axios.post(
        "http://localhost:5000/api/auth/login",
        value
      );
      const user = await login.data;
      dispatch(loginData(user));
      navigate("/");
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
      <LoginPage createUser={createUser} loginUser={loginUser} />
      <Footer />
    </>
  );
};

export default Login;
