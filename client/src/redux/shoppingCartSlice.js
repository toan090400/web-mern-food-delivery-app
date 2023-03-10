import { createSlice } from "@reduxjs/toolkit";

const getDataCart =
  localStorage.getItem("cart") == null
    ? []
    : JSON.parse(localStorage.getItem("cart"));
const getDataTotal =
  localStorage.getItem("total") == null
    ? 0
    : JSON.parse(localStorage.getItem("total"));
const getDataQuantityItem =
  localStorage.getItem("quantityItem") == null
    ? 0
    : JSON.parse(localStorage.getItem("quantityItem"));

export const shoppingCartSlice = createSlice({
  name: "styles",
  initialState: {
    cart: getDataCart,
    total: getDataTotal,
    quantityItem: getDataQuantityItem,
  },
  reducers: {
    addCart: (state, action) => {
      const actionId = action.payload.id;
      const actionName = action.payload.name;
      const actionPrice = action.payload.price;
      // kiểm tra xem item có tồn tại không ?
      const findItem = state.cart.find((item) => item.id === actionId);
      // nếu không có thì thì thêm mới item
      if (!findItem) {
        // cập nhập lại số lượng trong giỏ hàng
        state.quantityItem = state.quantityItem + 1;
        // thêm mới vào giỏ hàng
        state.cart.push({
          id: actionId,
          name: actionName,
          price: actionPrice,
          quantity: 1,
          totalProduct: actionPrice * 1,
        });
        // cập nhập lại tổng tiền giỏ hàng
        state.total = state.cart.reduce(
          (total, item) => total + item.totalProduct,
          0
        );
        // lưu dữ liệu lại tại localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem(
          "quantityItem",
          JSON.stringify(state.quantityItem)
        );
      }
    },
    deleteProduct: (state, action) => {
      const actionId = action.payload;
      // kiểm tra xem item có tồn tại không ?
      const findItem = state.cart.find((item) => item.id === actionId);
      console.log(findItem.totalProduct);
      if (findItem) {
        state.cart = state.cart.filter((item) => item.id !== actionId);
        state.total = state.total - findItem.totalProduct;
        state.quantityItem = state.quantityItem - 1;
        // lưu dữ liệu lại tại localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem(
          "quantityItem",
          JSON.stringify(state.quantityItem)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, deleteProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
