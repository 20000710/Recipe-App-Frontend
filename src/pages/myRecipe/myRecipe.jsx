import React, { useEffect, useState } from "react";
import GaleryImg from "../../components/galeryImage/galeryImg";
import myRecipe1 from "../../asset/img/myrecipe1.png";
import myRecipe2 from "../../asset/img/myrecipe2.png";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "../../components/navbar/navbarMenu";
import Footer from "../../components/footer";

const MyRecipe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
  console.log(search);

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
        `${process.env.REACT_APP_API_BACKEND}/recipe?search=${cari}&sort=${sort}`
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

  return (
    <div className="h-100">
      <NavbarMenu />
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">Recipe List</h3>
            <p className="mt-5">Recipe List</p>
          </div>

          {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
        </div> */}
          <form onSubmit={handleSearch}>
            <select onChange={handleSort}>
              <option value="">Pilih Option</option>
              <option value="ASC">A-Z</option>
              <option value="DESC">Z-A</option>
            </select>
            <button type="submit">Sort</button>
          </form>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {recipe.length > 0 ? (
              recipe.map((item) => (
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
              <div className=" text-center m-auto mb-5">
                <h2>Recipe Not Found</h2>
                <Footer />
              </div>
            )}
          </div>
          {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5 justify-content-evenly">
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
