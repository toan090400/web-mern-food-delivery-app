import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import FoodDetail from "./pages/FoodDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

import AdminCategoryList from "./pages/Admin/Category/categorys";
import AdminCategoryCreate from "./pages/Admin/Category/categoryCreate";
import AdminCategoryUpdate from "./pages/Admin/Category/categoryUpdate";

import AdminProductList from "./pages/Admin/Product/products";
import AdminProductCreate from "./pages/Admin/Product/productCreate";
import AdminProductUpdate from "./pages/Admin/Product/productUpdate";

import AdminUserList from "./pages/Admin/User/users";

import AdminBillList from "./pages/Admin/Bill/bills";
import AdminBillDetailList from "./pages/Admin/Bill/detail";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth.user);
  const accessToken = auth.accessToken;
  const user = auth.user?.isAdmin;
  return (
    <div className="web-food">
      <Routes>
        <Route path="/" element={<Home title={"Home"} />} />
        <Route path="/all-foods" element={<AllFoods title={"All Foods"} />} />
        <Route path="/cart" element={<Cart title={"Cart"} />} />
        <Route path="/contact" element={<Contact title={"Contact"} />} />
        <Route path="/login" element={<Login title={"Login"} />} />
        <Route path="/register" element={<Register title={"Register"} />} />
        <Route path="/checkout" element={<Checkout title={"Checkout"} />} />
        <Route
          path="/food-detail/:slug"
          element={<FoodDetail title={"Food-Detail"} />}
        />
        {user && (
          <>
            <Route
              path="/admin/categorys"
              element={
                <AdminCategoryList
                  title={"Category-List"}
                  accessToken={accessToken}
                />
              }
            />
            <Route
              path="/admin/category/create"
              element={
                <AdminCategoryCreate
                  title={"Category-Create"}
                  accessToken={accessToken}
                />
              }
            />
            <Route
              path="/admin/category/update/:slug"
              element={
                <AdminCategoryUpdate
                  title={"Category-Update"}
                  accessToken={accessToken}
                />
              }
            />

            <Route
              path="/admin/products"
              element={
                <AdminProductList
                  title={"Product-List"}
                  accessToken={accessToken}
                />
              }
            />
            <Route
              path="/admin/product/create"
              element={
                <AdminProductCreate
                  title={"Product-Create"}
                  accessToken={accessToken}
                />
              }
            />
            <Route
              path="/admin/product/update/:slug"
              element={
                <AdminProductUpdate
                  title={"Product-Update"}
                  accessToken={accessToken}
                />
              }
            />

            <Route
              path="/admin/users"
              element={<AdminUserList title={"User-List"} />}
            />

            <Route
              path="/admin/bills"
              element={<AdminBillList title={"Bill-List"} />}
            />
            <Route
              path="/admin/bill/detail/:id"
              element={<AdminBillDetailList title={"Bill-Detail-List"} />}
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
