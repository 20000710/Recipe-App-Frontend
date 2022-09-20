import React from 'react'
import './footerRecipe.css'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

const FooterRecipe = () => {
  return (
    <Fragment>
    <footer>
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
        <nav>
          <Link to="#">Product</Link>
          <Link to="#">Company</Link>
          <Link to="#">Learn More</Link>
          <Link to="#">Get in Touch</Link>
        </nav>
    </footer>
    </Fragment>
  )
}

export default FooterRecipe