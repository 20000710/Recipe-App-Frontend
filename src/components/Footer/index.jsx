import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer>
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
        <div className="link">
          <Link to="#">Product</Link>
          <Link to="#">Company</Link>
          <Link to="#">Learn More</Link>
          <Link to="#">Get in Touch</Link>
        </div>
      </footer>
  );
};

export default Footer;
