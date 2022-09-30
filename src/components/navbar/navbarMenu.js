import React from "react";
import "./navbarMenu.css";

const NavbarMenu = ({ menu1, menu2, menu3, link1, link2, link3 }) => {
  const isAuth = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token");
  };

  const authLinks = (
    <Navbar.Collapse className="justify-content-start">
      <Navbar.Text>
        <Link to={link1}>{menu1}</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to={link2}>{menu2}</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to={link3}>{menu3}</Link>
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
