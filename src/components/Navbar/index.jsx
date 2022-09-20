import React from "react";
import "./navbar.css";
import Profile from "../../assets/img/profile.svg";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-5">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                Add Recipe
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
          <img src={Profile} alt="" />
          <button class="btn me-5" type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
