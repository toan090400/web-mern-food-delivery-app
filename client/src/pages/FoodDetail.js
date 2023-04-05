import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

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
  // redux auth
  const auth = useSelector((state) => state.auth.user);
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
  // data review
  const [dataReview, setDataReview] = useState({});
  const [resDataReview, setResDataReview] = useState(true);
  useEffect(() => {
    const getReview = async () => {
      try {
        const getReview = await axios.get(`http://localhost:5000/api/reviews`);
        const valueReview = await getReview.data.reviews.filter((item) => {
          return item.product.slug === slug;
        });
        setDataReview(valueReview);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [slug, resDataReview]); // khi id thay đổi thì sẽ chạy lại
  // create review
  const createReview = async (value) => {
    try {
      const create = await axios.post(
        "http://localhost:5000/api/reviews/create",
        value,
        {
          headers: { token: `Bearer ${auth.accessToken}` },
        }
      );
      const message = await create.data.message;
      toast.success(message);
      setResDataReview(!resDataReview);
    } catch (error) {
      console.log(error);
      const err = await error.response.data.message;
      toast.error(err);
    }
  };
  return (
    <>
      <Header />
      <Banner title={slug} />
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
      <FoodDetailPage
        data={data}
        imageID={styles.foodDetailImageChoose}
        imageChoose={imageChoose}
        dataProducts={dataLike}
        auth={auth.user}
        createReview={createReview}
        dataReview={dataReview}
      />
      <Footer />
    </>
  );
};

export default FoodDetail;
