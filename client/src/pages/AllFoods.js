import React from "react";
import AllFoodsPage from "../components/AllFoods/AllFoods";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const AllFoods = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  return (
    <>
      <Header link="foods" />
      <AllFoodsPage />
      <Footer />
    </>
  );
};

export default AllFoods;
