import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Layout/Admin/Header/Header";
import Update from "../../../components/Admin/Product/Update";

const CategoryUpdate = ({ title }) => {
  //  lấy slug
  const { slug } = useParams();
  document.title = `Admin-${title}-${slug}`;
  // lấy data
  const [status, setStatus] = useState(true);
  const [data, setData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const getProduct = await axios.get(
          `http://localhost:5000/api/products/${slug}`
        );
        setData(getProduct.data.product);
        const getCategorys = await axios.get(
          `http://localhost:5000/api/categorys`
        );
        setDataCategory(getCategorys.data.categorys);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [slug, status]); // khi id thay đổi thì sẽ chạy lại
  // update data
  const handlerUpdate = async (item) => {
    const idItem = await data._id;
    const images = await item.images;
    const formData = await new FormData();
    formData.append("category", item.category);
    formData.append("discription", item.discription);
    formData.append("status", item.status);
    formData.append("price", item.price);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const update = await axios.patch(
        `http://localhost:5000/api/products/update/${idItem}`,
        formData
      );
      const message = await update.data.message;
      toast.success(message);
      setStatus(!status);
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
      <Update
        data={data}
        dataCategory={dataCategory}
        updateItem={handlerUpdate}
      />
    </>
  );
};

export default CategoryUpdate;
