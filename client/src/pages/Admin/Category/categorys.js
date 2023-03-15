import React from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import List from "../../../components/Admin/Category/List";
const categorys = ({ title }) => {
  document.title = `Admin-${title}`;
  return (
    <>
      <Header />
      <List />
    </>
  );
};

export default categorys;
