import React, { useEffect, useState } from "react";
import Header from "../../assets/img/popular-header.svg";
import "./popularrecipe.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BACKEND + "/popular")
      .then((res) => {
        console.log(res);
        setRecipe(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div className="content-popular-recipe">
        <div className="row g-0">
          {recipe.map((item) => (
            <div className="image-popular-recipe col-md-4" key={item.id}>
              <figure className="position-relative">
                <img
                  src={`${process.env.REACT_APP_API_BACKEND}/${item.photo}`}
                  alt=""
                  className="img-fluid"
                />
                <figcaption>
                  <Link to={`/detail-recipe/${item.id}`}>{item.title}</Link>
                </figcaption>
              </figure>
            </div>
          ))}

          {/* <div className="image-popular-recipe col-md-4">
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
          </div> */}
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
