import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const CheckOut = ({ pay }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const total = useSelector((state) => state.shoppingCart.total);
  const authID = useSelector((state) => state.auth.user.user?._id);
  const onSubmit = async (data) => {
    try {
      if (total === 0) {
        toast.error("Bạn chưa có sản phẩm!");
      } else if (!authID) {
        toast.error("Bạn chưa đăng nhập!");
      } else {
        const form = { ...data, total: total };
        pay(form);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="checkout-page">
      <div className="checkout-page-chill">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="checkout-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-controll">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập name !!!",
                  },
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="form-controll">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập phone !!!",
                  },
                  pattern: {
                    value: /^[0-9\-\+]{9,15}$/g,
                    message: "Phone không hợp lệ",
                  },
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className="form-controll">
              <label htmlFor="address">Address:</label>
              <textarea
                name=""
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập address !!!",
                  },
                })}
              />
              {errors.address && <p>{errors.address.message}</p>}
            </div>
            <div className="checkout-total">
              <p>Total: {Intl.NumberFormat().format(total)} VND</p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
