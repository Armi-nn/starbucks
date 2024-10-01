import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import CartSliceReducer from "./Slices/CartSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    cart: CartSliceReducer,
  },
});
export default store;
