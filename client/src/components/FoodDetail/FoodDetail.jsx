import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { addCart } from "../../redux/shoppingCartSlice";
import { foodDetailDescriptionAndReview } from "../../redux/styleSlice";
import UICart from "../UI/CartProduct/CartProduct";
import imageItem1 from "../../assets/images/ava-1.jpg";
const FoodDetail = ({ data, imageID, imageChoose, dataProducts, auth }) => {
  // choose image
  const handlerImage = (value) => {
    imageChoose(value.id);
  };
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  // add to cart
  const handlerAddToCart = (title) => {
    dispatch(addCart(title));
  };
  // choose description or review
  const handlerClickDetail = (value) => {
    dispatch(foodDetailDescriptionAndReview(value));
  };
  // submit review
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="food-detail">
      <div className="food-detail-chill">
        {data.images && (
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
        )}
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
              // disabled
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="food-detail-context">
        <div className="context-text">
          <h3
            className={
              styles.foodDetailDescriptionAndReview === "Description"
                ? "show"
                : ""
            }
            onClick={() => handlerClickDetail("Description")}
          >
            Description
          </h3>
          <h3
            className={
              styles.foodDetailDescriptionAndReview === "Review" ? "show" : ""
            }
            onClick={() => handlerClickDetail("Review")}
          >
            Review
          </h3>
        </div>
        {styles.foodDetailDescriptionAndReview === "Description" && (
          <div className="context-discription">
            <p>{data.discription}</p>
          </div>
        )}

        {styles.foodDetailDescriptionAndReview === "Review" && (
          <div className="context-review">
            {auth ? (
              <div className="review">
                <div className="image-user">
                  <img src={imageItem1} alt="" loading="lazy" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div className="form-controll">
                    <textarea
                      name=""
                      id=""
                      {...register("review", {
                        required: {
                          value: true,
                          message: "Vui lòng nhập đánh giá !!!",
                        },
                      })}
                    />
                    {errors.review && <span>{errors.review.message}</span>}
                  </div>
                  <button>Submit</button>
                </form>
              </div>
            ) : (
              <h2>Vui lòng đăng nhập!</h2>
            )}
            <div className="review-all">
              <h2>Review about product 01</h2>
              <h2>No one Review</h2>
              <div className="item">
                <div className="user-image">
                  <img src={imageItem1} alt="" loading="lazy" />
                </div>
                <div className="user-review">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde laudantium quam error voluptatem, corrupti autem
                    adipisci voluptatum similique exercitationem, dignissimos a.
                    Numquam consequatur ducimus modi dolorum cum eum molestias
                    officiis? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Unde laudantium quam error voluptatem,
                    corrupti autem adipisci voluptatum similique exercitationem,
                    dignissimos a. Numquam consequatur ducimus modi dolorum cum
                    eum molestias officiis?
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="user-image">
                  <img src={imageItem1} alt="" loading="lazy" />
                </div>
                <div className="user-review">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde laudantium quam error voluptatem, corrupti autem
                    adipisci voluptatum similique exercitationem, dignissimos a.
                    Numquam consequatur ducimus modi dolorum cum eum molestias
                    officiis? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Unde laudantium quam error voluptatem,
                    corrupti autem adipisci voluptatum similique exercitationem,
                    dignissimos a. Numquam consequatur ducimus modi dolorum cum
                    eum molestias officiis?
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="user-image">
                  <img src={imageItem1} alt="" loading="lazy" />
                </div>
                <div className="user-review">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde laudantium quam error voluptatem, corrupti autem
                    adipisci voluptatum similique exercitationem, dignissimos a.
                    Numquam consequatur ducimus modi dolorum cum eum molestias
                    officiis? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Unde laudantium quam error voluptatem,
                    corrupti autem adipisci voluptatum similique exercitationem,
                    dignissimos a. Numquam consequatur ducimus modi dolorum cum
                    eum molestias officiis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="food-detail-category">
        <h2>Would you like?</h2>
        <UICart dataProducts={dataProducts} />
      </div>
    </div>
  );
};

export default FoodDetail;
