import React from "react";
import Slider from "react-slick";
const NetworkSlide = ({ dataUser }) => {
  const settings = {
    dots: true,
    infinite: false, // có lặp lại không ?
    speed: 500,
    slidesToShow: 1, // hiển thị bao nhiêu item
    slidesToScroll: 1, // trượt sẽ hiện bao nhiêu item mới
  };
  return (
    <Slider {...settings}>
      {dataUser.map((item) => {
        return (
          <div key={item._id} className="user-item">
            <div className="user-text">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat totam dolorum velit consequatur, voluptate tempora unde
                doloribus? Saepe harum laboriosam provident dolorem! Temporibus
                recusandae vitae commodi fugit dolore placeat quibusdam?""
              </p>
            </div>
            <div className="user-image">
              <img
                src={`/${item.imageLink}/${item.image.id}`}
                alt={item.username}
                loading="lazy"
              />
              <h5>{item.username}</h5>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default NetworkSlide;
