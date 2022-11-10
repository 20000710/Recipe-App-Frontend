import React, { Fragment, useState } from "react";
import NavbarMenu from "../../components/navbar/navbarMenu";
import MainImage from "../../assets/img/main-image.svg";
import "./Style.css";
import Popular from "../../components/Popular";
import PopularRecipe from "../../components/PopularRecipe";
import NewRecipe from "../../components/NewRecipe";
import Footer from "../../components/Footer/index";
import { useNavigate, useSearchParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decode = jwt_decode(token);
  const id = decode.id;

  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    navigate({
      pathname: "/searchRecipe",
      search: "?search=" + search + "&mode=" + searchParams.get("sort"),
    });
  };
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className="container-home">
        <NavbarMenu
          menu1="Home"
          menu2="Add Recipe"
          menu3="Profile"
          link1="/home"
          link2="/add-recipe"
          link3={`/profile/${id}`}
        />
        <div className="row home">
          <div className="col-6">
            <h1 className="main-text">Discover Recipe & Delicious Food</h1>
            <div className="search-wrapper">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                class="btn btn-warning ms-1"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-6 me-3 ">
            <img src={MainImage} alt="" />
          </div>
        </div>
      </div>
      <Popular />
      <NewRecipe />
      <PopularRecipe />
      <Footer />
    </Fragment>
  );
};
export default Home;
