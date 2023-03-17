import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { imageChoose } from "../../../redux/styleSlice";
const Craete = ({ createItem }) => {
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const image = imageData;
      const slug = data.name.replaceAll(" ", "-");
      createItem({ ...data, slug, image });
      reset();
      if (styles.imageChoose) {
        dispatch(imageChoose());
        setImageData(null);
        setImageLink(null);
      }
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
  const [imageLink, setImageLink] = useState();
  const [imageData, setImageData] = useState();
  useEffect(() => {
    return () => {
      if (imageLink) {
        URL.revokeObjectURL(imageLink);
      }
    };
  }, [imageLink]);
  const handlerAvata = (data) => {
    const file = data.target.files[0];
    const image = URL.createObjectURL(file);

    setImageData(file);
    setImageLink(image);
  };
  return (
    <div className="admin-create">
      <div className="container_page">
        <div className="container_form">
          <div className="form-header">
            <h2>Create Category</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} id="form" className="form">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="Name category"
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
              <label htmlFor="discription">Discription</label>
              {errors.discription && (
                <i className="fas fa-exclamation-circle"></i>
              )}
              <textarea
                className="textarea"
                id="discription"
                cols="30"
                rows="10"
                placeholder="Discription category"
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
              <label htmlFor="image">Image:</label>

              <div className="file_upload">
                <p onClick={handlerClickImage}>Choose Image</p>
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
                  {imageLink && <img src={imageLink} alt="caterory-name" />}
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
