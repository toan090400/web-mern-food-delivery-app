import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homeProductSelect } from "../../redux/styleSlice";

import hero from "../../assets/images/hero.png";

import category01 from "../../assets/images/category-01.png";
import category02 from "../../assets/images/category-02.png";
import category03 from "../../assets/images/category-03.png";
import category04 from "../../assets/images/category-04.png";

import service01 from "../../assets/images/service-01.png";
import service02 from "../../assets/images/service-02.png";
import service03 from "../../assets/images/service-03.png";

import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";

import product01 from "../../assets/images/product_01.1.jpg";
import product02 from "../../assets/images/product_2.1.jpg";
import product03 from "../../assets/images/product_3.1.jpg";

import whyImg from "../../assets/images/location.png";

import networkImg from "../../assets/images/network.png";

import PizzaSlide from "./PizzaSlide";

import NetwordSlide from "./NetworkSlide";

const Home = () => {
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const handlerProductSelect = (title) => {
    dispatch(homeProductSelect(title));
  };
  return (
    <div className="home">
      <div className="home-chill">
        <div className="home-data">
          <div className="data-text">
            <h5>Easy way to make an order</h5>
            <h1>
              <span>HUNGRY?</span> Just wait food at
              <span className="dow"> your door</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </p>
          </div>
          <div className="data-btns">
            <button className="order">
              Order now <i className="fa-solid fa-arrow-right"></i>
            </button>

            <button className="foods-link">
              <Link to="/all-foods">See all foods</Link>
            </button>
          </div>
          <div className="data-service">
            <p>
              <span className="shipping__icon">
                <i className="fa-solid fa-car"></i>
              </span>{" "}
              No shipping charge
            </p>

            <p>
              <span className="shipping__icon">
                <i className="fa-solid fa-user-shield"></i>
              </span>{" "}
              100% secure checkout
            </p>
          </div>
        </div>
        <div className="home-image">
          <div className="hero-image">
            <img src={hero} alt="home" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="home-category">
        <div className="category-chill">
          <div className="category-item">
            <div className="category-image">
              <img src={category01} alt="category-fast-food" loading="lazy" />
            </div>
            <h6>Fastfood</h6>
          </div>
          <div className="category-item">
            <div className="category-image">
              <img src={category02} alt="category-pizza" loading="lazy" />
            </div>
            <h6>Pizza</h6>
          </div>
          <div className="category-item">
            <div className="category-image">
              <img src={category03} alt="category-asian-food" loading="lazy" />
            </div>
            <h6>Asian Food</h6>
          </div>
          <div className="category-item">
            <div className="category-image">
              <img src={category04} alt="category-row-meat" loading="lazy" />
            </div>
            <h6>Row Meat</h6>
          </div>
        </div>
      </div>
      <div className="home-feature">
        <div className="feature-chill">
          <div className="feature-text">
            <h5 className="feature-subtitle">What we serve</h5>
            <div className="title-container">
              <h2 className="feature-title">Just sit back at home</h2>
              <h2 className="feature-title">
                we will <span>take care</span>
              </h2>
            </div>
            <p className="feature_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
            <p className="feature_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.{" "}
            </p>
          </div>
          <div className="feature-data">
            <div className="feature-item">
              <img src={service01} alt="feature-img" loading="lazy" />
              <h5>Quick Delivery</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
            <div className="feature-item">
              <img src={service02} alt="feature-img" loading="lazy" />
              <h5>Super Dine In</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
            <div className="feature-item">
              <img src={service03} alt="feature-img" loading="lazy" />
              <h5>Easy Pick Up</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-product">
        <div className="product-text">
          <h2>Popular Foods</h2>
        </div>
        <div className="foods-category">
          <button
            onClick={() => handlerProductSelect("All")}
            className={styles.homeProductSelect === "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => handlerProductSelect("BURGER")}
            className={styles.homeProductSelect === "BURGER" ? "active" : ""}
          >
            <img src={foodCategoryImg01} alt="food-category" loading="lazy" />
            BURGER
          </button>
          <button
            onClick={() => handlerProductSelect("PIZZA")}
            className={styles.homeProductSelect === "PIZZA" ? "active" : ""}
          >
            <img src={foodCategoryImg02} alt="food-category" loading="lazy" />
            PIZZA
          </button>
          <button
            onClick={() => handlerProductSelect("BREAD")}
            className={styles.homeProductSelect === "BREAD" ? "active" : ""}
          >
            <img src={foodCategoryImg03} alt="food-category" loading="lazy" />
            BREAD
          </button>
        </div>
        <div className="product-foods">
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product01} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product03} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product02} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product03} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product01} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product02} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product02} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product01} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="foods-cart">
            <div className="foods-image">
              <img src={product03} alt="product01" loading="lazy" />
            </div>
            <div className="foods-content">
              <h5>
                <Link to={`/`}>Product 01</Link>
              </h5>
              <div className="button">
                <span className="product-price">1000 VND</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-why">
        <div className="why-image">
          <img src={whyImg} alt="location" loading="lazy" />
        </div>
        <div className="why-context">
          <h2 className="tasty__treat-title">
            Why <span>Tasty Treat?</span>
          </h2>
          <p className="tasty__treat-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            minus. Tempora reprehenderit a corporis velit, laboriosam vitae
            ullam, repellat illo sequi odio esse iste fugiat dolor, optio
            incidunt eligendi deleniti!
          </p>
          <div className="choose">
            <p className="choose__us-title">
              <i className="fa-regular fa-circle-check"></i> Fresh and tasty
              foods
            </p>
            <p className="choose__us-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </p>
          </div>
          <div className="choose">
            <p className="choose__us-title">
              <i className="fa-regular fa-circle-check"></i> Quality support
            </p>
            <p className="choose__us-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </p>
          </div>
          <div className="choose">
            <p className="choose__us-title">
              <i className="fa-regular fa-circle-check"></i> Order from any
              location
            </p>
            <p className="choose__us-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
      <div className="home-pizza">
        <div className="pizza-title">
          <h2>Hot Pizza</h2>
        </div>
        <div className="pizza-card">
          <PizzaSlide />
        </div>
      </div>
      <div className="home-network">
        <div className="testimonial">
          <h5 className="testimonial__subtitle">Testimonial</h5>
          <h2 className="testimonial__title">
            What our <span>customers</span> are saying
          </h2>
          <p className="testimonial__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            quasi qui minus quos sit perspiciatis inventore quis provident
            placeat fugiat!
          </p>
          <div className="network-user">
            <NetwordSlide />
          </div>
        </div>
        <div className="network-image">
          <img src={networkImg} alt="network_image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Home;
