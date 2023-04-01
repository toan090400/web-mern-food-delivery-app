import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/Bill/Detail";
const Bills = ({ title }) => {
  const { id } = useParams();
  document.title = `Admin-${title}`;
  // bills
  const [data, setData] = useState({});
  useEffect(() => {
    const getBill = async () => {
      try {
        const getBill = await axios.get(
          `http://localhost:5000/api/bills/${id}`
        );
        setData(getBill.data.bill);
      } catch (error) {
        console.log(error);
      }
    };
    getBill();
  }, [id]); // khi id thay đổi thì sẽ chạy lại
  return (
    <>
      <Header />
      <List data={data} />
    </>
  );
};

export default Bills;
