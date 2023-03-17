import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Layout/Admin/Header/Header";
import Create from "../../../components/Admin/Category/Craete";
const CategoryCreate = ({ title }) => {
  // title
  document.title = `Admin-${title}`;
  // create
  const createItem = async (data) => {
    try {
      const formData = await new FormData();
      formData.append("name", data.name);
      formData.append("discription", data.discription);
      formData.append("slug", data.slug);
      formData.append("image", data.image);
      const create = await axios.post(
        "http://localhost:5000/api/categorys/create",
        formData
      );
      const message = await create.data.message;
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
      <Create createItem={createItem} />
    </>
  );
};

export default CategoryCreate;
