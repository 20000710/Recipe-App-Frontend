import React, { Fragment } from "react";
import "./detailReceipe.css";
import resep from "../../asset/img/resep.svg";
import NavbarMenu from "../../components/navbar/navbarMenu";
import FooterRecipe from "../../components/footer/footerRecipe";
import { Link } from "react-router-dom";

const DetailReceipe = () => {
  return (
    <Fragment>
      <div className="container">
        <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" />
        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="my-5 text-center">Lorem Sandwich</h1>
              <img src={resep} className="img-fluid" alt="" />
            </div>
          </div>
        </section>
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <h3>Ingredients</h3>
            <br />
            <ul>
              <li>2 Egss</li>
              <li>2 tbsp mayonnaise</li>
              <li>3 slice bread</li>
              <li>a little butter</li>
              <li>1/3 carton of cess</li>
            </ul>
          </div>
        </div>
        {/* video step */}
        <section>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4>Video Step</h4>
              <div className="flex justify-content-columns">
                <div className="row mt-3">
                  <div className="col-4">
                    <Link to={"/video_page"}>
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
                  >
                    comment:
                  </textarea>
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
