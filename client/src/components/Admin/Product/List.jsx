import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkItem, clearCheckItem } from "../../../redux/deleteManySlice";
const List = ({ data, deleteItem, deleteItemAll }) => {
  const dispatch = useDispatch();
  const deleteItemCheck = useSelector((state) => state.deleteMany.check);
  const handlerClick = (e) => {
    const itemValue = e.target.value;
    const itemCheck = e.target.checked;
    dispatch(checkItem({ itemValue, itemCheck }));
  };
  // handlerDeleteAll
  const handlerDeleteAll = () => {
    deleteItemAll(deleteItemCheck);
    setTimeout(() => {
      dispatch(clearCheckItem());
    }, 1000);
  };
  // handlerDelete
  const handlerDelete = (data) => {
    deleteItem(data._id);
  };
  return (
    <div className="admin-table">
      <div className="admin-header">
        <div className="create">
          <Link to={`/admin/product/create`}>Create new one</Link>
        </div>
        <h2>Product List</h2>
        <div className="clear">
          <i onClick={handlerDeleteAll} className="fa-solid fa-trash"></i>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td data="Check-To-Delete">
                  <input
                    onClick={handlerClick}
                    type="checkbox"
                    id="item"
                    value={item._id}
                  />
                </td>
                <td data="Name">{item.name}</td>
                <td data="Price">{item.price}</td>
                <td data="Category">{item.category.name}</td>
                <td data="Image">
                  <div className="images">
                    {item.images.length === 0 ? (
                      <h3>Chưa có ảnh</h3>
                    ) : (
                      <>
                        {item.images.map((images) => {
                          return (
                            <div key={images._id} className="images-item">
                              <img
                                className="image"
                                src={`${images.link}/${images.id}`}
                                alt={item.name}
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </td>
                <td data="Update">
                  <div className="icon-update">
                    <Link
                      to={`/admin/product/update/${item.slug}`}
                      className="link"
                    >
                      <i className="fa-solid fa-wrench"></i>
                    </Link>
                  </div>
                </td>
                <td data="Delete">
                  <div className="icon-delete">
                    <i
                      onClick={() => handlerDelete(item)}
                      className="fa-solid fa-trash"
                    ></i>
                  </div>
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
