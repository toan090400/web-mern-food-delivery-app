import React from "react";
import { useForm } from "react-hook-form";
import imagedata from "../../../assets/images/category-01.png";
const Craete = ({ createItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const formData = await new FormData();
      formData.append("name", data.name);
      formData.append("discription", data.discription);
      formData.append("discription", data.image[0]);
      console.log(formData);
      createItem(data);
      // reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin-create">
      <div className="container_page">
        <div className="container_form">
          <div className="form-header">
            <h2>Create Account</h2>
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
              {errors.image && <i className="fas fa-exclamation-circle"></i>}
              {errors.image && <small>{errors.image.message}</small>}
              <div className="file_upload">
                <input
                  className="file_upload__input"
                  type="file"
                  id="image"
                  // multiple
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image không được trống",
                    },
                  })}
                />
              </div>

              <div className="images">
                <img src={imagedata} alt="" />
              </div>
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Craete;
