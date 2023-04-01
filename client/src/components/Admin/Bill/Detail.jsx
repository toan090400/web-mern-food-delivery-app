import React from "react";
const List = ({ data }) => {
  return (
    <div className="admin-table">
      <div className="admin-header">
        <h2>{data.user?.username}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Total</th>
          </tr>
        </thead>
        <tbody>
          {data.products?.map((item) => {
            return (
              <tr key={item._id}>
                <td data="Name">{item.id.name}</td>
                <td data="Image">
                  <div className="images">
                    {item.id.images.length === 0 ? (
                      <h3>Chưa có ảnh</h3>
                    ) : (
                      <>
                        {item.id.images.map((images) => {
                          return (
                            <div key={images._id} className="images-item">
                              <img
                                className="image"
                                src={`${images.link}/${images.id}`}
                                alt={item.id.name}
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </td>
                <td data="Name">
                  {Intl.NumberFormat().format(item.id.price)} VND
                </td>
                <td data="Quantity">{item.quantity}</td>
                <td data="Total Product">
                  {Intl.NumberFormat().format(item.totalProduct)} VND
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
