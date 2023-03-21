import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Layout/Admin/Header/Header";
import Create from "../../../components/Admin/Product/Craete";
const CategoryCreate = ({ title }) => {
  // title
  document.title = `Admin-${title}`;
  // data categorys
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllCategorys = async () => {
      try {
        const categorys = await axios.get(
          "http://localhost:5000/api/categorys"
        );
        setData(categorys.data.categorys);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategorys();
  }, []);
  // create
  const createItem = async (data) => {
    const images = await data.images;
    try {
      const formData = await new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("discription", data.discription);
      formData.append("slug", data.slug);
      formData.append("status", data.status);
      formData.append("price", data.price);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      const create = await axios.post(
        "http://localhost:5000/api/products/create",
        formData
      );
      const message = await create.data.message;
      toast.success(message);
    } catch (error) {
      console.log(error);
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
      <Create data={data} createItem={createItem} />
    </>
  );
};

export default CategoryCreate;
