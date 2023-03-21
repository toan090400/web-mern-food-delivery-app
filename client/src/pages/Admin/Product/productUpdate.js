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
  // const [status, setStatus] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const getCategory = async () => {
      try {
        const getCategory = await axios.get(
          `http://localhost:5000/api/categorys/${slug}`
        );
        setData(getCategory.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [slug]); // khi id thay đổi thì sẽ chạy lại
  // update data
  const handlerUpdate = async (item) => {
    const idItem = await data._id;
    const formData = await new FormData();
    formData.append("discription", item.discription);
    formData.append("image", item.image);
    try {
      const update = await axios.patch(
        `http://localhost:5000/api/categorys/update/${idItem}`,
        formData
      );
      const message = await update.data.message;
      toast.success(message);
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
      <Update data={data} updateItem={handlerUpdate} />
    </>
  );
};

export default CategoryUpdate;
