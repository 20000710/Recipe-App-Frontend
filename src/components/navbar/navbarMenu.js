import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './navbarMenu.css'

const NavbarMenu = () => {
  return (
    <Navbar>
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text>
          <a href="/home">Home</a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="/add-recipe">Add Recipe</a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="/profile">Profile</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMenu