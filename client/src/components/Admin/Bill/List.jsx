import React from "react";
import { Link } from "react-router-dom";
const List = ({ data }) => {
  return (
    <div className="admin-table">
      <div className="admin-header">
        <h2>Bills List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Account</th>
            <th>Image</th>
            <th>Total</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td data="Name">{item.name}</td>
                <td data="Phone">{item.phone}</td>
                <td data="Address">{item.address}</td>
                <td data="Account">{item.user.username}</td>
                <td data="Image">
                  <div className="images">
                    <div className="images-item">
                      <img
                        className="image"
                        src={`${item.user.imageLink}/${item.user.image.id}`}
                        alt={item.username}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </td>
                <td data="Total">
                  {Intl.NumberFormat().format(item.total)} VND
                </td>
                <td data="Total">
                  <Link to={`/admin/bill/detail/${item._id}`}>
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
