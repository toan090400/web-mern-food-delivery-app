import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/Product/List";
const Products = ({ title }) => {
  document.title = `Admin-${title}`;
  // products
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const products = await axios.get("http://localhost:5000/api/products");
        setData(products.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [status]);
  // delete products
  const handleClick = async (data) => {
    try {
      const deleteItem = await axios.delete(
        `http://localhost:5000/api/products/delete/${data}`
      );
      setStatus(!status);
      const message = await deleteItem.data.message;
      toast.success(message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteAll = async (data) => {
    if (data.length > 0) {
      try {
        const deleteItem = await axios.post(
          `http://localhost:5000/api/products/deleteAll`,
          data
        );
        setStatus(!status);
        const message = await deleteItem.data.message;
        toast.success(message);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warning("Vui lòng chọn thể loại muốn xóa !");
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
      <List
        data={data}
        deleteItem={handleClick}
        deleteItemAll={handleDeleteAll}
      />
    </>
  );
};

export default Products;
