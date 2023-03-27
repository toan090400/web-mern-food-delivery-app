import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Banner from "../components/Layout/Banner/Banner";
import FoodDetailPage from "../components/FoodDetail/FoodDetail";
import { foodDetailImageChoose } from "../redux/styleSlice";
const FoodDetail = ({ title }) => {
  // lấy slug
  const { slug } = useParams();
  // title
  document.title = `${title}-${slug}`;
  // redux food detail images choose
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  // reset choose images
  useEffect(() => {
    dispatch(foodDetailImageChoose(""));
  }, [dispatch]);
  // choose images
  const imageChoose = (value) => {
    dispatch(foodDetailImageChoose(value));
  };
  // data
  const [data, setData] = useState({});
  const [dataLike, setDataLike] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const getProduct = await axios.get(
          `http://localhost:5000/api/products/${slug}`
        );
        setData(getProduct.data.product);
        const getAllProduct = await axios.get(
          `http://localhost:5000/api/products`
        );
        const categoryProduct = await getAllProduct.data.products.filter(
          (item) => {
            return item.category.name === getProduct.data.product.category.name;
          }
        );
        setDataLike(categoryProduct);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [slug]); // khi id thay đổi thì sẽ chạy lại
  return (
    <>
      <Header />
      <Banner title={slug} />
      <FoodDetailPage
        data={data}
        imageID={styles.foodDetailImageChoose}
        imageChoose={imageChoose}
        dataProducts={dataLike}
      />
      <Footer />
    </>
  );
};

export default FoodDetail;
