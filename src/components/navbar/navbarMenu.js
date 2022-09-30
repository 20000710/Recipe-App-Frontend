import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import "./navbarMenu.css";

const NavbarMenu = ({ link1, link2, link3 }) => {

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
              <a class="nav-link active nav-menu" aria-current="page" href={link1}>
                home
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link nav-menu" href={link2}>
                Add Recipe
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link nav-menu" href={link3}>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
