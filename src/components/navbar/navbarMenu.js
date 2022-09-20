import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './navbarMenu.css'

const NavbarMenu = ({ menu1, menu2, menu3 }) => {

  return (
    <Navbar>
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text>
          <Link to="/home">{menu1}</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/add-recipe">{menu2}</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/profile">{menu3}</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu