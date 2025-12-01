import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      console.log(action);
    },
    removetocart: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtocart, removetocart } = productslice.actions;

export default productslice.reducer;
