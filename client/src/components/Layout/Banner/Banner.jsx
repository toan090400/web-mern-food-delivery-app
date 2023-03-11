import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="banner-chill">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Banner;
