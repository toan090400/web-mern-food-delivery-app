import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/User/List";
const Users = ({ title }) => {
  document.title = `Admin-${title}`;
  // users
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await axios.get("http://localhost:5000/api/users");
        setData(users.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);
  return (
    <>
      <Header />
      <List data={data} />
    </>
  );
};

export default Users;
