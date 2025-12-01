import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { transfermovie } from "./redux/slices/searchslice";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  let x1 = useRef();
  let navigate = useNavigate();
  let Dispatch = useDispatch();
  function myFunction(event) {
    event.preventDefault();
    console.log(x1.current.value);
    if (x1.current.value != "") {
      Dispatch(transfermovie(x1.current.value));
      navigate("/search");
    }
  }
  const brandName = useSelector((state) => state.datatransfer.brand);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home {brandName}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/show">
                Show Data
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/add-user">
                AddUser
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/show-user">
                Showuser
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/toprated">
                Toprated Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/upcoming">
                Upcoming Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/popular">
                Popular Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/comp-1">
                Props Drilling
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/comp-10">
                Component 10
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search" onSubmit={myFunction}>
            <input
              ref={x1}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
