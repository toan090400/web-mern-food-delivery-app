import React, { useEffect, useState } from "react";
import axios from "axios";
import AllFoodsPage from "../components/AllFoods/AllFoods";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Banner from "../components/Layout/Banner/Banner";
const AllFoods = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  //
  const [search, setSearch] = useState("");
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const homeProducts = async () => {
      try {
        const products = await axios.get("http://localhost:5000/api/products");
        const productsArray = products.data.products;
        if (search === "") {
          setDataProducts(productsArray);
        } else {
          const searchData = productsArray.filter((item) => {
            return (
              item.name.toLowerCase().includes(search.toLowerCase()) && item
            );
          });
          setDataProducts(searchData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    homeProducts();
  }, [search]);
  const handlerSearchValue = (value) => {
    setSearch(value);
  };
  return (
    <>
      <Header link="foods" />
      <Banner title={"All Foods"} />
      <AllFoodsPage
        dataProducts={dataProducts}
        handlerSearchValue={handlerSearchValue}
      />
      <Footer />
    </>
  );
};

export default AllFoods;
