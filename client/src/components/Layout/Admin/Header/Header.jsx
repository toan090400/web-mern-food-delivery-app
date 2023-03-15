import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuAdmin } from "../../../../redux/styleSlice";
const Header = () => {
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const handlerMenuOpen = () => {
    dispatch(menuAdmin());
  };
  return (
    <div className="menu">
      <div className="menu-chill">
        <div className="user">
          <h3>nhanvien001</h3>
        </div>
        <div className={styles.menuAdmin ? "links open" : "links"}>
          <div className="close">
            <i
              onClick={handlerMenuOpen}
              className="fa-regular fa-rectangle-xmark"
            ></i>
          </div>
          <Link to={`/`}>Home</Link>
          <Link to={`/admin/products`}>Product</Link>
          <Link to={`/admin/categorys`}>Category</Link>
          <Link to={`/admin/users`}>Account</Link>
          <Link to={`/admin/bills`}>Bill</Link>
          <span>Logout</span>
        </div>
        <div className="bar">
          <i onClick={handlerMenuOpen} className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
