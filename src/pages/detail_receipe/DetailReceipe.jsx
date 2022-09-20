import React, { Fragment, useEffect, useState } from "react";
import "./detailReceipe.css";
import resep from "../../asset/img/resep.svg";
import NavbarMenu from "../../components/navbar/navbarMenu";
import FooterRecipe from "../../components/footer/footerRecipe";
import saved from "../../asset/img/saved.svg";
import like from "../../asset/img/like.svg";
import { Link, useParams } from "react-router-dom";
import { getDetailRecipe } from "../../components/config/actions/recipeAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const DetailReceipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let token = localStorage.getItem("token");
  const { recipeDetail } = useSelector((state) => state.recipe);

  // comment form
  const [form, setForm] = useState({
    recipeId: id,
    commentText: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API_BACKEND + "/comment", form, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  // save
  const [isCheckedSave, setIsCheckedSave] = useState(false);
  const save = () => {
    if (isCheckedSave) {
      axios
        .post(
          process.env.REACT_APP_API_BACKEND + "/saved",
          {
            recipeId: id,
          },
          {
            headers: {
              token: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(
          process.env.REACT_APP_API_BACKEND + "/unsaved",
          {
            recipeId: id,
          },
          {
            headers: {
              token: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // like
  const [isCheckedLike, setIsCheckedLike] = useState(false);
  const liked = () => {
    if (isCheckedLike) {
      axios
        .post(
          process.env.REACT_APP_API_BACKEND + "/liked",
          {
            recipeId: id,
          },
          {
            headers: {
              token: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(
          process.env.REACT_APP_API_BACKEND + "/unliked",
          {
            recipeId: id,
          },
          {
            headers: {
              token: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // get comment
  // axios.get(process.env.REACT_APP_API_BACKEND + '/comment')

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailRecipe(id));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" />
        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1 className="my-5 text-center">{recipeDetail.title}</h1>
              <div className="card">
                <div className="card-body">
                  <img
                    src={`${process.env.REACT_APP_API_BACKEND}/${recipeDetail.photo}`}
                    className="img-recipe"
                    alt=""
                  />
                  <div className="d-flex saved-like">
                    <input
                      type="checkbox"
                      id="save"
                      className="checkbox"
                      onChange={(e) => setIsCheckedSave(e.target.checked)}
                    />
                    <label htmlFor="save">
                      {" "}
                      <img
                        src={saved}
                        className="saved"
                        alt=""
                        onClick={save}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="like"
                      className="checkbox"
                      onChange={(e) => setIsCheckedLike(e.target.checked)}
                    />
                    <label htmlFor="like">
                      <img src={like} alt="" className="like" onClick={liked} />
                    </label>
                  </div>
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
        {/* comment */}
        <section>
          <div className="row my-5">
            <div className="col-lg-8 offset-lg-2">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center my-3">
                  <textarea
                    id=""
                    rows="5"
                    className="text-area p-2"
                    placeholder="comment:"
                    name="commentText"
                    onChange={handleChange}
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
