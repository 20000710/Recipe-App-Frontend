import React from "react";
import Navbar from "../components/navbar/index";
import MainImage from "../assets/img/main-image.svg";
import "./Style.css";
import Popular from "../components/Popular";
import PopularRecipe from "../components/PopularRecipe";
import NewRecipe from "../components/NewRecipe";
import Footer from "../components/Footer/index";

const Home = () => {
  return (
    <section>
      <div className="container-home">
        <Navbar />
        <div className="row">
          <div className="col-6">
            <h1 className="main-text">Discover Recipe & Delicious Food</h1>
            <div className="search-wrapper">
              <input
                type="search"
                id="search"
                placeholder="Search Recipe"
                data-search
              />
            </div>
          </div>
          <div className="col-6 me-3 ">
            {/* <img className="vector-1" src={Vector} alt="" />
          <img className="vector-2" src={Vector} alt="" /> */}
            <img src={MainImage} alt="" />
          </div>
        </div>
      </div>
      <Popular />
      <NewRecipe />
      <PopularRecipe />
      <Footer />
    </section>
  );
};
export default Home;
