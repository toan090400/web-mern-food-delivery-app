import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/styleSlice";
const Login = ({ createUser, loginUser }) => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const handlerClick = (value) => {
    dispatch(login(value));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitLogin = async (data) => {
    try {
      loginUser(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitRegister = async (data) => {
    try {
      createUser(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <h2 onClick={() => handlerClick("login")}>login</h2>
      {styles.login === "login" && (
        <form onSubmit={handleSubmit(onSubmitLogin)} action="">
          <span>username</span>
          <div className="form-controll">
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "Vui lòng nhập username !!!",
                },
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <span>password</span>
          <div className="form-controll">
            <input
              type="text"
              {...register("password", {
                required: {
                  value: true,
                  message: "Vui lòng nhập password !!!",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button>submit</button>
        </form>
      )}

      <h2 onClick={() => handlerClick("register")}>register</h2>
      {styles.login === "register" && (
        <form onSubmit={handleSubmit(onSubmitRegister)} action="">
          <span>username</span>
          <div className="form-controll">
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "Vui lòng nhập username !!!",
                },
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <span>password</span>
          <div className="form-controll">
            <input
              type="text"
              {...register("password", {
                required: {
                  value: true,
                  message: "Vui lòng nhập password !!!",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form-controll">
            <input
              type="file"
              {...register("image", {
                required: {
                  value: true,
                  message: "Vui lòng nhập image !!!",
                },
              })}
            />
            {errors.image && <span>{errors.image.message}</span>}
          </div>
          <button>submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
