import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "zara",
};

export const datatransferslice = createSlice({
  name: "datatransfer",
  initialState,
  reducers: {
    transferdata: (state, action) => {
      console.log(action);
      state.brand = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { transferdata } = datatransferslice.actions;

export default datatransferslice.reducer;
