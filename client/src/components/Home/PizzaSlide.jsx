import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import product02 from "../../assets/images/product_2.1.jpg";

const PizzaSlide = () => {
  const settings = {
    dots: true,
    infinite: false, // có lặp lại không ?
    speed: 500,
    slidesToShow: 4, // hiển thị bao nhiêu item
    slidesToScroll: 1, // trượt sẽ hiện bao nhiêu item mới
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-item">
        <div className="pizza-image">
          <img src={product02} alt="product01" loading="lazy" />
        </div>
        <div className="pizza-content">
          <h5>
            <Link to={`/`}>Product 01</Link>
          </h5>
          <div className="button">
            <span className="product-price">100000 VND</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default PizzaSlide;
