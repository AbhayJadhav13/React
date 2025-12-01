import { BrowserRouter, Routes, Route } from "react-router";

import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Home from "./components/Home";
import App from "./components/App";
import Adduser from "./components/Adduser";
import Showuser from "./components/Showuser";
import Show from "./components/Show";
import Comp1 from "./components/Comp1";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Singlemovie from "./components/Singlemovie";
import Comp10 from "./components/Comp10";
import Search from "./components/Search";

const route = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact x1="100" x2="200" />} />
        <Route path="Show" element={<Show />} />
        <Route path="add-user" element={<Adduser />} />
        <Route path="show-user" element={<Showuser />} />
        <Route path="comp-1" element={<Comp1 />} />
        <Route path="comp-10" element={<Comp10 />} />
        <Route path="search" element={<Search />} />
        <Route path="popular" element={<Popular />} />
        <Route path="toprated" element={<Toprated />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="search" element={<Search />} />
        <Route path="singlemovie/:movieid" element={<Singlemovie />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default route;
