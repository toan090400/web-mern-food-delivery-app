import React from "react";
import CartProduct from "../UI/CartProduct/CartProduct";
const AllFoods = ({ dataProducts, handlerSearchValue }) => {
  const handlerSearch = (e) => {
    handlerSearchValue(e.target.value);
  };
  return (
    <div className="all-foods">
      <div className="foods-chill">
        <div className="foods">
          <div className="foods-search">
            <div className="form-controll">
              <div className="input">
                <input
                  type="text"
                  onChange={handlerSearch}
                  placeholder="Search"
                />
                <div className="image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
                      fill="#6A6A6A"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foods-data">
          <CartProduct dataProducts={dataProducts} />
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
