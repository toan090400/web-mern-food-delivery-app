import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = ({ loginUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      loginUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
            <button>Submit</button>
          </form>
          <div className="register">
            <Link to={`/register`}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
