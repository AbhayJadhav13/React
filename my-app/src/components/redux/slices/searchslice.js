import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviename: "",
};

export const searchslice = createSlice({
  name: "search",
  initialState,
  reducers: {
    transfermovie: (state, action) => {
      console.log(action);
      state.moviename = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { transfermovie } = searchslice.actions;

export default searchslice.reducer;
