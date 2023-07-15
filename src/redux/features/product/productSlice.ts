import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import BaseProductType from "@/types/product";

interface ProductState {
  list: BaseProductType[];
  detail: BaseProductType;
}

// Define the initial state using that type
const initialState: ProductState = {
  list: [],
  detail: {
    id: 0,
    name: "",
    price: 0,
    dsc: "",
    img: "",
    rate: 0,
    country: "",
    categoryId: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
