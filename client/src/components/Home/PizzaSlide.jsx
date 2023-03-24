import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/shoppingCartSlice";
const PizzaSlide = ({ dataPizzasHot }) => {
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
          dots: true,
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
  const dispatch = useDispatch();
  const handlerAddToCart = (title) => {
    dispatch(addCart(title));
  };
  return (
    <Slider {...settings}>
      {dataPizzasHot.map((item) => {
        return (
          <div key={item._id} className="pizza-item">
            <div className="pizza-image">
              <img
                src={`${item.images[0].link}/${item.images[0].id}`}
                alt={item.name}
                loading="lazy"
              />
            </div>
            <div className="pizza-content">
              <h5>
                <Link to={`/food-detail/${item.slug}`}>{item.name}</Link>
              </h5>
              <div className="button">
                <span className="product-price">{item.price} VND</span>
                <button
                  onClick={() => handlerAddToCart(item)}
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default PizzaSlide;
