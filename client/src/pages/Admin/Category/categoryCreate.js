import React from "react";
import Header from "../../../components/Layout/Admin/Header/Header";
import Create from "../../../components/Admin/Category/Craete";
const categoryCreate = ({ title }) => {
  // title
  document.title = `Admin-${title}`;
  // create
  const createItem = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <Create createItem={createItem} />
    </>
  );
};

export default categoryCreate;
