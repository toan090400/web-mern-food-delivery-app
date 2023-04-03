import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Register = ({ createUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const image = await imageData;
      if (image) {
        createUser({ ...data, image });
        setTimeout(() => {
          reset();
          setImageData(null);
          setImageLink(null);
        }, 2000);
      } else {
        toast.error("Vui lòng chọn ảnh đại diện !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // image
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
    <div className="login-page">
      <div className="login-page-chill">
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-controll">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập username !!!",
                  },
                })}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="form-controll">
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập password !!!",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="form-controll-image">
              <label htmlFor="image">Choose Image </label>
              <div className="file_upload">
                <input
                  className="file_upload__input"
                  type="file"
                  id="image"
                  onChange={handlerAvata}
                />
              </div>
              <div className="images">
                {imageLink && <img src={imageLink} alt="caterory-name" />}
              </div>
            </div>
            <button>Submit</button>
          </form>
          <div className="register">
            <Link to={`/login`}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
