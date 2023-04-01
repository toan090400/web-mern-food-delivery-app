import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/Bill/List";
const Bills = ({ title }) => {
  document.title = `Admin-${title}`;
  // bills
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllBills = async () => {
      try {
        const bills = await axios.get("http://localhost:5000/api/bills");
        setData(bills.data.bills);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBills();
  }, []);
  return (
    <>
      <Header />
      <List data={data} />
    </>
  );
};

export default Bills;
