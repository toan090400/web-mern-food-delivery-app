import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/shoppingCartSlice";
import imageItem1 from "../../assets/images/product_01.1.jpg";
import imageItem2 from "../../assets/images/product_01.jpg";
import imageItem3 from "../../assets/images/product_01.3.jpg";
const FoodDetail = ({ data, imageID, imageChoose }) => {
  //   const handlerImage = (value) => {
  //     imageChoose(value.id);
  //   };
  const dispatch = useDispatch();
  const handlerAddToCart = (title) => {
    dispatch(addCart(title));
  };
  return (
    <div className="food-detail">
      <div className="food-detail-chill">
        {/* {data.images && (
          <div className="food-detail-chill-images">
            {data.images?.map((item) => {
              return (
                <div key={item._id} className="images-item">
                  <img
                    onClick={() => handlerImage(item)}
                    src={`${item.link}/${item.id}`}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        )}
        {data.images && (
          <div className="food-detail-chill-image">
            {imageID === "" ? (
              <img
                src={`https://lh3.googleusercontent.com/d/${data.images[0].id}`}
                alt={data.name}
                loading="lazy"
              />
            ) : (
              <img
                src={`https://lh3.googleusercontent.com/d/${imageID}`}
                alt={data.name}
                loading="lazy"
              />
            )}
          </div>
        )} */}

        {/* ----------------------------------------- */}
        <div className="food-detail-chill-images">
          <div className="images-item">
            <img src={imageItem1} alt="" loading="lazy" />
          </div>
          <div className="images-item">
            <img src={imageItem2} alt="" loading="lazy" />
          </div>
          <div className="images-item">
            <img src={imageItem3} alt="" loading="lazy" />
          </div>
        </div>
        <div className="food-detail-chill-image">
          <img src={imageItem1} alt="" loading="lazy" />
        </div>
        <div className="food-detail-chill-information">
          <div className="information-name">
            <p>{data.name}</p>
          </div>
          <div className="information-price">
            <p>
              Price: <span>{data.price} VND</span>
            </p>
          </div>
          <div className="information-category">
            <p>
              Category: <span>{data.category?.name}</span>
            </p>
          </div>
          <div className="information-button">
            <button
              onClick={() => handlerAddToCart(data)}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="food-detail-context">
        <div className="context-text">
          <h3 className="show">Description</h3>
          <h3>Review</h3>
        </div>
        <div className="context-discription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            similique deleniti quibusdam eaque, molestias at ab expedita ea
            dicta harum laborum voluptate beatae labore, est sed officiis, velit
            asperiores nisi.
          </p>
        </div>
        <div className="context-review">
          <p>
            Review: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda similique deleniti quibusdam eaque, molestias at ab
            expedita ea dicta harum laborum voluptate beatae labore, est sed
            officiis, velit asperiores nisi.
          </p>
        </div>
      </div>
      <div className="food-detail-category"></div>
    </div>
  );
};

export default FoodDetail;
