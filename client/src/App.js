import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import AdminCategoryList from "./pages/Admin/Category/categorys";
import AdminCategoryCreate from "./pages/Admin/Category/categoryCreate";
import AdminCategoryUpdate from "./pages/Admin/Category/categoryUpdate";

const App = () => {
  return (
    <div className="web-food">
      <Routes>
        <Route path="/" element={<Home title={"Home"} />} />
        <Route path="/all-foods" element={<AllFoods title={"All Foods"} />} />
        <Route path="/cart" element={<Cart title={"Cart"} />} />
        <Route path="/contact" element={<Contact title={"Contact"} />} />

        <Route
          path="/admin/categorys"
          element={<AdminCategoryList title={"Category-List"} />}
        />
        <Route
          path="/admin/category/create"
          element={<AdminCategoryCreate title={"Category-Create"} />}
        />
        <Route
          path="/admin/category/update/:slug"
          element={<AdminCategoryUpdate title={"Category-Update"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
