import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { imageChoose } from "../../../redux/styleSlice";
const Craete = ({ data, createItem }) => {
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const images = imageData;
      const slug = data.name.replaceAll(" ", "-");
      createItem({ ...data, slug, images });
      setTimeout(() => {
        reset();
        dispatch(imageChoose());
        setImageData([]);
        setImageLink([]);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  // image
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const handlerClickImage = () => {
    dispatch(imageChoose());
  };
  const [imageLink, setImageLink] = useState([]);
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    return () => {
      if (imageLink.length > 0) {
        imageLink.forEach((item) => {
          URL.revokeObjectURL(item.link);
        });
      }
    };
  }, [imageLink]);
  const handlerAvata = (data) => {
    const file = data.target.files;
    const arrData = [];
    const arrLink = [];
    for (let index = 0; index < file.length; index++) {
      arrData.push(file[index]);
      const image = URL.createObjectURL(file[index]);
      arrLink.push({ link: image });
    }
    setImageData(arrData);
    setImageLink(arrLink);
  };
  return (
    <div className="admin-create">
      <div className="container_page">
        <div className="container_form">
          <div className="form-header">
            <h2>Create Product</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} id="form" className="form">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="Name product"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name không được trống",
                  },
                })}
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form_control">
              <label htmlFor="price">Price</label>
              {errors.price && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="100"
                id="price"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price không được trống",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Số lượng không hợp lệ",
                  },
                })}
              />
              {errors.price && <small>{errors.price.message}</small>}
            </div>
            <div className="form_control">
              <div className="radio">
                <div className="radio-text">
                  <h2>Catgory</h2>
                  {errors.category && (
                    <i className="fas fa-exclamation-circle"></i>
                  )}
                </div>
                <div className="radio-content">
                  {data.map((item) => {
                    return (
                      <div key={item._id} className="group">
                        <input
                          type="radio"
                          name="exampleRadios"
                          className="checkbox"
                          id={item._id}
                          value={item._id}
                          {...register("category", {
                            required: {
                              value: true,
                              message: "Category không được trống",
                            },
                          })}
                        />
                        <label htmlFor={item._id}>{item.name}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              {errors.category && <small>{errors.category.message}</small>}
            </div>
            <div className="form_control">
              <label htmlFor="discription">Discription</label>
              {errors.discription && (
                <i className="fas fa-exclamation-circle"></i>
              )}
              <textarea
                className="textarea"
                id="discription"
                cols="30"
                rows="10"
                placeholder="Discription product"
                {...register("discription", {
                  required: {
                    value: true,
                    message: "Discription không được trống",
                  },
                })}
              ></textarea>
              {errors.discription && (
                <small>{errors.discription.message}</small>
              )}
            </div>
            <div className="form_control">
              <div className="radio">
                <div className="radio-text">
                  <h2>Status</h2>
                </div>
                <div className="radio-content">
                  <div className="group">
                    <input
                      type="radio"
                      name="exampleRadios"
                      className="checkbox"
                      id="hot"
                      value="HOT"
                      {...register("status")}
                    />
                    <label htmlFor="hot">Hot</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form_control">
              <label htmlFor="image">Images:</label>
              <div className="file_upload">
                <p onClick={handlerClickImage}>Choose Images</p>
                {styles.imageChoose && (
                  <input
                    className="file_upload__input"
                    type="file"
                    id="image"
                    multiple
                    onChange={handlerAvata}
                  />
                )}
              </div>
              {styles.imageChoose && (
                <div className="images">
                  {imageLink.map((item, index) => {
                    return (
                      <img key={index} src={item.link} alt="caterory-name" />
                    );
                  })}
                </div>
              )}
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Craete;
