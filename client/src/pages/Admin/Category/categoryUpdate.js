import React from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import Update from "../../../components/Admin/Category/Update";
const categoryUpdate = ({ title }) => {
  document.title = `Admin-${title}-123`;
  return (
    <>
      <Header />
      <Update />
    </>
  );
};

export default categoryUpdate;
