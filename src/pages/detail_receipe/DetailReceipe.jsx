import React, { Fragment, useEffect } from "react";
import "./detailReceipe.css";
import resep from "../../asset/img/resep.svg";
import NavbarMenu from "../../components/navbar/navbarMenu";
import FooterRecipe from "../../components/footer/index";
import saved from "../../asset/img/saved.svg";
import like from "../../asset/img/like.svg";
import { Link, useParams } from "react-router-dom";
import { getDetailRecipe } from "../../components/config/actions/recipeAction";
import { useDispatch, useSelector } from "react-redux";

const DetailReceipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipeDetail } = useSelector((state) => state.recipe);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailRecipe(id));
  }, []);

  // const ingredients = recipeDetail.ingredients;
  // const ingredientsList = ingredients.split(",");
  // console.log(ingredientsList);

  return (
    <Fragment>
      <div className="container">
        <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" />
        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="my-5 text-center">{recipeDetail.title}</h1>
              <div className="">
                <img src={resep} className="img-fluid" alt="" />
                <div className="saved-like">
                  <img src={saved} className="saved" alt="" />
                  <img src={like} alt="" className="like" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <h3>Ingredients</h3>
            <strong>{recipeDetail.ingredients}</strong>
          </div>
        </div>
        {/* video step */}
        <section>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mt-4">
              <h4>Video Step</h4>
              <div className="flex justify-content-columns">
                <div className="row mt-3">
                  <div className="col-4">
                    <Link to={"/video-page"}>
                      <button className="btn btn-warning btn-w">video</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row my-5">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="d-flex justify-content-center my-3">
                  <textarea
                    name="text"
                    id=""
                    rows="5"
                    className="text-area p-2"
                    placeholder="comment:"
                  ></textarea>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-5 mt-2">
                    <button className="btn btn-warning btn-w">add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <FooterRecipe />
    </Fragment>
  );
};

export default DetailReceipe;
