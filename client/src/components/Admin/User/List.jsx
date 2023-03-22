import React from "react";
const List = ({ data }) => {
  return (
    <div className="admin-table">
      <div className="admin-header">
        <h2>Users List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Image</th>
            <th>isAdmin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td data="Name">{item.name}</td>
                <td data="Image">
                  <div className="images">
                    <div className="images-item">
                      <img
                        className="image"
                        src={`${item.imageLink}/${item.image.id}`}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </td>
                <td data="isAdmin">
                  {item.isAdmin ? "Level Admin" : "Level Nomal"}
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
