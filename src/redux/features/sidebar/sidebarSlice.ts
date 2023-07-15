import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Sidebar {
  isActive: boolean;
}

const initialState: Sidebar = {
  isActive: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    collapse: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { collapse } = sidebarSlice.actions;

export default sidebarSlice.reducer;
