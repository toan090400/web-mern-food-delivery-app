import React from "react";

import HomePage from "../components/Home/Home";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Home = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;

  return (
    <>
      <Header link="home" />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
