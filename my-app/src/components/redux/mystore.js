import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartslice";
import datatransferReducer from "./slices/datatransferslice";
import searchReducer from "./slices/searchslice";
const mystore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    datatransfer: datatransferReducer,
  },
});
export default mystore;
