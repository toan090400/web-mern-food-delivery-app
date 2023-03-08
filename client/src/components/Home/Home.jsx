import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";
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
    </div>
  );
};

export default Home;
