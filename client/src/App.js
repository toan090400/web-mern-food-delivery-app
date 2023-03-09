import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div className="web-food">
      <Routes>
        <Route path="/" element={<Home title={"Home"} />} />
        <Route path="/all-foods" element={<AllFoods title={"All Foods"} />} />
        <Route path="/cart" element={<Cart title={"Cart"} />} />
        <Route path="/contact" element={<Contact title={"Contact"} />} />
      </Routes>
    </div>
  );
};

export default App;
