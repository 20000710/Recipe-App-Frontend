import React from "react";
import Header from "../../assets/img/popular-header.svg";
import Popular1 from "../../assets/img/popular-1.svg";
import Popular2 from "../../assets/img/popular-2.svg";
import "./popular.css";

const Popular = () => {
  return (
    <section
      style={{
        background: "#FFF5EC",
      }}
    >
      <div className="popular-header">
        <img src={Header} className="img-header my-5" alt="" />
        <h1 className="px-3 my-5">Popular For You</h1>
      </div>
      <div className="content-popular">
        <div className="row">
          <div className="image-popular col-auto">
            <figure className="position-relative">
              <img src={Popular1} alt="a latte" className="img-fluid" />
              <figcaption>Pizza Lamoa</figcaption>
            </figure>
          </div>
          <div className="image-popular col-auto">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
