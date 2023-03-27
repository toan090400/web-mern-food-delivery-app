import React from "react";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import LoginPage from "../components/Login/Login";
const Login = ({ title }) => {
  // title
  document.title = `${title}`;
  // create
  const createUser = async (value) => {
    console.log("create");
    console.log(value);
    console.log(value.image[0]);
  };
  // login
  const loginUser = async (value) => {
    console.log("login");
    console.log(value);
  };
  return (
    <>
      <Header />
      <LoginPage createUser={createUser} loginUser={loginUser} />
      <Footer />
    </>
  );
};

export default Login;
