import React from "react";
import "./navbarMenu.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = ({ idParam }) => {
  const isAuth = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token");
  };

  const authLinks = (
    <Navbar.Collapse className="justify-content-start">
      <Navbar.Text>
        <Link to="/home">Home</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to="/add-recipe">Add Recipe</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to={`/profile/${idParam}`}>Profile</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to="/login">
          <button class="btn me-5" type="submit" onClick={logOut}>
            Log out
          </button>
        </Link>
      </Navbar.Text>
    </Navbar.Collapse>
  );

  const guestLinks = (
    <Navbar.Collapse>
      <Navbar.Text>
        <Link to={`/login`}>Login</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to={`/signup`}>Register</Link>
      </Navbar.Text>
    </Navbar.Collapse>
  );

  return (
    <Navbar>
      <Container>
        <Navbar.Toggle />
        {isAuth ? authLinks : guestLinks}
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
