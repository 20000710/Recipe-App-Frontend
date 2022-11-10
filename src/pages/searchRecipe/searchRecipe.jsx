import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "../../components/navbar/navbarMenu";
import Footer from "../../components/Footer/index";
import Pagination from "../../components/pagination/index.js";

const SearchRecipe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(3);

  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getRecipe();
    setSearchParams({
      search,
      sort,
    });
  };

  const getRecipe = async () => {
    const cari =
      searchParams.get("search") === null ? "" : searchParams.get("search");
    axios
      .get(
        `${process.env.REACT_APP_API_BACKEND}/recipe?search=${cari}&mode=${sort}`
      )
      .then((response) => {
        console.log(response.data.data);
        setRecipe(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRecipe();
    setSearch(searchParams.get("search"));
    searchParams.get("search");
    searchParams.get("sort");
  }, [searchParams]);
  // console.log(searchParams.get("sort"));

  const indexOfLastPost = currentPage * recipePerPage;
  const indexOfFirstPost = indexOfLastPost - recipePerPage;
  const currentPosts = recipe.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-100">
      <NavbarMenu
        menu1="Home"
        menu2="Add Recipe"
        menu3="Profile"
        link1="/home"
        link2="/add-recipe"
        link3="/profile"
      />
      <div className="container mt-5">
        <div className="row">
          <div className="products">
            <h3 className="title">Recipe List</h3>
            <div className="search-wrapper mb-2">
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
          <form onSubmit={handleSearch}>
            <select onChange={handleSort}>
              <option value="">Pilih Option</option>
              <option value="ASC">A-Z</option>
              <option value="DESC">Z-A</option>
            </select>
            <button type="submit">Sort</button>
          </form>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {currentPosts.length > 0 ? (
              currentPosts.map((item) => (
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
              ))
            ) : (
              <div className=" text-center m-auto mb-3">
                <h2>Recipe Not Found</h2>
              </div>
            )}
          </div>
          <Pagination
            recipePerPage={recipePerPage}
            totalRecipe={recipe.length}
            paginate={paginate}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchRecipe;
