import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router";
import { Provider } from "react-redux";
import mystore from "./redux/mystore"; // Your single store

function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
