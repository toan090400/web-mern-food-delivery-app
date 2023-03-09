import React from "react";
import Slider from "react-slick";
import user01 from "../../assets/images/ava-1.jpg";
import user02 from "../../assets/images/ava-2.jpg";
import user03 from "../../assets/images/ava-3.jpg";
import user04 from "../../assets/images/ava-4.jpg";
const NetworkSlide = () => {
  const settings = {
    dots: true,
    infinite: false, // có lặp lại không ?
    speed: 500,
    slidesToShow: 1, // hiển thị bao nhiêu item
    slidesToScroll: 1, // trượt sẽ hiện bao nhiêu item mới
  };
  return (
    <Slider {...settings}>
      <div className="user-item">
        <div className="user-text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            totam dolorum velit consequatur, voluptate tempora unde doloribus?
            Saepe harum laboriosam provident dolorem! Temporibus recusandae
            vitae commodi fugit dolore placeat quibusdam?""
          </p>
        </div>
        <div className="user-image">
          <img src={user01} alt="user" loading="lazy" />
          <h5>User 01</h5>
        </div>
      </div>
      <div className="user-item">
        <div className="user-text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            totam dolorum velit consequatur, voluptate tempora unde doloribus?
            Saepe harum laboriosam provident dolorem! Temporibus recusandae
            vitae commodi fugit dolore placeat quibusdam?""
          </p>
        </div>
        <div className="user-image">
          <img src={user02} alt="user" loading="lazy" />
          <h5>User 02</h5>
        </div>
      </div>
      <div className="user-item">
        <div className="user-text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            totam dolorum velit consequatur, voluptate tempora unde doloribus?
            Saepe harum laboriosam provident dolorem! Temporibus recusandae
            vitae commodi fugit dolore placeat quibusdam?""
          </p>
        </div>
        <div className="user-image">
          <img src={user03} alt="user" loading="lazy" />
          <h5>User 03</h5>
        </div>
      </div>
      <div className="user-item">
        <div className="user-text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            totam dolorum velit consequatur, voluptate tempora unde doloribus?
            Saepe harum laboriosam provident dolorem! Temporibus recusandae
            vitae commodi fugit dolore placeat quibusdam?""
          </p>
        </div>
        <div className="user-image">
          <img src={user04} alt="user" loading="lazy" />
          <h5>User 04</h5>
        </div>
      </div>
    </Slider>
  );
};

export default NetworkSlide;
