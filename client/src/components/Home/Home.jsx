import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";
import category01 from "../../assets/images/category-01.png";
import category02 from "../../assets/images/category-02.png";
import category03 from "../../assets/images/category-03.png";
import category04 from "../../assets/images/category-04.png";
const Home = () => {
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
              Order now <i class="fa-solid fa-arrow-right"></i>
            </button>

            <button className="foods-link">
              <Link to="/all-foods">See all foods</Link>
            </button>
          </div>
          <div className="data-service">
            <p>
              <span className="shipping__icon">
                <i class="fa-solid fa-car"></i>
              </span>{" "}
              No shipping charge
            </p>

            <p>
              <span className="shipping__icon">
                <i class="fa-solid fa-user-shield"></i>
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
    </div>
  );
};

export default Home;
