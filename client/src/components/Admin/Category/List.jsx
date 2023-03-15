import React from "react";
import { Link } from "react-router-dom";
import imagedata from "../../../assets/images/category-01.png";
const List = () => {
  const handlerClick = (e) => {
    const categorysAll = e.target.checked;
    const categorys = document.querySelectorAll("#categorys");
    if (categorysAll) {
      categorys.forEach((item) => (item.checked = true));
    } else {
      categorys.forEach((item) => (item.checked = false));
    }
  };
  const handlerDeleteAll = (e) => {
    console.log("run");
  };
  return (
    <div className="admin-table">
      <div className="admin-header">
        <div className="create">
          <Link to={`/admin/category/create`}>Create new one</Link>
        </div>
        <div className="create">
          <h2>Categorys List</h2>
        </div>
        <div className="clear">
          <i onClick={handlerDeleteAll} className="fa-solid fa-trash"></i>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input onClick={handlerClick} type="checkbox" />
            </th>
            <th>Name</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data="Check-To-Delete">
              <input type="checkbox" id="categorys" />
            </td>
            <td data="Name">80 cm</td>
            <td data="Image">
              <div className="images">
                <div className="images-item">
                  <img className="image" src={imagedata} alt="" />
                </div>
              </div>
            </td>
            <td data="Update">
              <div className="icon-update">
                <Link to={`/`} className="link">
                  <i className="fa-solid fa-wrench"></i>
                </Link>
              </div>
            </td>
            <td data="Delete">
              <div className="icon-delete">
                <i className="fa-solid fa-trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td data="Check-To-Delete">
              <input type="checkbox" id="categorys" />
            </td>
            <td data="Name">80 cm</td>
            <td data="Image">
              <div className="images">
                <div className="images-item">
                  <img className="image" src={imagedata} alt="" />
                </div>
                <div className="images-item">
                  <img className="image" src={imagedata} alt="" />
                </div>
              </div>
            </td>
            <td data="Update">
              <div className="icon-update">
                <Link to={`/`} className="link">
                  <i className="fa-solid fa-wrench"></i>
                </Link>
              </div>
            </td>
            <td data="Delete">
              <div className="icon-delete">
                <i className="fa-solid fa-trash"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
