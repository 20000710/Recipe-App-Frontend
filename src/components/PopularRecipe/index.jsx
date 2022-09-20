import React from "react";
import Header from "../../assets/img/popular-header.svg";
import Popular1 from "../../assets/img/popular-1.svg";
import Popular2 from "../../assets/img/popular-2.svg";
import "./popularrecipe.css";

const PopularRecipe = () => {
  return (
    <section
      style={{
        background: "#FFF5EC",
      }}
    >
      <div className="popular-header">
        <img src={Header} className="img-header my-5" alt="" />
        <h1 className="px-3 my-5">Popular Recipe</h1>
      </div>
      <div className="content-popular">
        <div className="row">
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          <div className="image-popular-recipe col-md-4">
            <figure className="position-relative">
              <img src={Popular2} alt="a latte" className="img-fluid" />
              <figcaption>King Burger</figcaption>
            </figure>
          </div>
          {/* <div className="image-popular-recipe col-md-4">
            <img src={Popular2} className="img-popular-recipe" alt="" />
            <h2 className="text-popular-recipe">King Burger</h2>
          </div>
          <div className="image-popular-recipe col-md-4">
            <img src={Popular2} className="img-popular-recipe" alt="" />
            <h2 className="text-popular-recipe">King Burger</h2>
          </div>
          <div className="image-popular-recipe col-md-4">
            <img src={Popular2} className="img-popular-recipe" alt="" />
            <h2 className="text-popular-recipe">King Burger</h2>
          </div>
          <div className="image-popular-recipe col-md-4">
            <img src={Popular2} className="img-popular-recipe" alt="" />
            <h2 className="text-popular-recipe">King Burger</h2>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
