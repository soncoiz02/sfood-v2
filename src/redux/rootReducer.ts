import { combineReducers } from "@reduxjs/toolkit";
import product from "./features/product/productSlice";
import sidebar from "./features/sidebar/sidebarSlice";

export const rootReducer = combineReducers({
  product,
  sidebar,
});
