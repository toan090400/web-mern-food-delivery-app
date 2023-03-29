import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/Category/List";
const Categorys = ({ title, accessToken }) => {
  document.title = `Admin-${title}`;
  // categorys
  const [status, setStatus] = useState(true);
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
  }, [status]);
  // delete categorys
  const handleClick = async (data) => {
    try {
      const deleteItem = await axios.delete(
        `http://localhost:5000/api/categorys/delete/${data}`,
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      );
      setStatus(!status);
      const message = await deleteItem.data.message;
      toast.success(message);
    } catch (error) {
      const err = await error.response.data.message;
      toast.error(err);
    }
  };
  const handleDeleteAll = async (data) => {
    if (data.length > 0) {
      try {
        const deleteItem = await axios.post(
          `http://localhost:5000/api/categorys/deleteAll`,
          data,
          {
            headers: { token: `Bearer ${accessToken}` },
          }
        );
        setStatus(!status);
        const message = await deleteItem.data.message;
        toast.success(message);
      } catch (error) {
        const err = await error.response.data.message;
        toast.error(err);
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

export default Categorys;
