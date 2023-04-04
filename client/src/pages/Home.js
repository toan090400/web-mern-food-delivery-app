import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import HomePage from "../components/Home/Home";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Home = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  // home-product
  const styles = useSelector((state) => state.styles);
  const select = styles.homeProductSelect;
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const homeProducts = async () => {
      try {
        const products = await axios.get("http://localhost:5000/api/products");
        const productsArray = products.data.products;
        if (select === "All") {
          setDataProducts(productsArray);
        } else {
          const newProductsArray = productsArray.filter((data) => {
            return data.category.name === select;
          });
          setDataProducts(newProductsArray);
        }
      } catch (error) {
        console.log(error);
      }
    };
    homeProducts();
  }, [select]);
  //home-pizza , categorys , user
  const [dataCategorys, setDataCategorys] = useState([]);
  const [dataPizzasHot, setPizzasHot] = useState([]);
  const [dataUser, setUser] = useState([]);
  const homeCategorys = async () => {
    try {
      const categorys = await axios.get("http://localhost:5000/api/categorys");
      const categorysArray = categorys.data.categorys;
      setDataCategorys(categorysArray);
    } catch (error) {
      console.log(error);
    }
  };
  const homePizzasHot = async () => {
    try {
      const products = await axios.get("http://localhost:5000/api/products");
      const dataProducts = products.data.products;
      const pizzaHot = dataProducts.filter((item) => {
        return item.category.name === "Pizza" && item.status === "HOT" && item;
      });
      setPizzasHot(pizzaHot);
    } catch (error) {
      console.log(error);
    }
  };
  const homeUsers = async () => {
    try {
      const users = await axios.get("http://localhost:5000/api/users");
      const usersArray = users.data.users;
      setUser(usersArray);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    homeCategorys();
    homePizzasHot();
    homeUsers();
  }, []);
  return (
    <>
      <Header link="home" />
      <HomePage
        dataProducts={dataProducts}
        dataCategorys={dataCategorys}
        dataPizzasHot={dataPizzasHot}
        dataUser={dataUser}
      />
      <Footer />
    </>
  );
};

export default Home;
