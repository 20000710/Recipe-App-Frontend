import React from "react";
import MainImage from "../../assets/img/new-recipe.svg";
import Header from "../../assets/img/popular-header.svg";
import Line from "../../assets/img/line-new-recipe.svg";
import "./newrecipe.css";

const NewRecipe = () => {
  return (
    <section
      style={{
        background: "#FFF5EC",
      }}
    >
      <div className="popular-header">
        <img src={Header} className="img-header my-5" alt="" />
        <h1 className="px-3 my-5">New Recipe</h1>
      </div>
      <div className="content-newrecipe">
        <div className="row">
          <div className="col-6 me-3">
            <img className="bg-1" src={MainImage} alt="" />
          </div>
          <div className="col-6">
            <h2 className="new-recipe-text">
              Healthy Bone Broth Ramen (Quick & Easy)
            </h2>
            <img src={Line} className="ms-2" alt="" />
            <p className="ms-2">
              Quick + Easy Chicken Bone Broth Ramen
              <br />
              Healthy chicken ramen in a hurry? That's right!
            </p>
            <button type="button" class="btn btn-warning">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRecipe;
