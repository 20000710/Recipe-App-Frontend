import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Bg from "../../../asset/img/Mask Group.svg";
import Masak from "../../../asset/img/wajan.svg";
import { login } from "../../../components/config/actions/userActions";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isChecked) {
      Swal.fire({
        text: "please agree terms & condition",
        icon: "error",
      });
      setLoading(false);
      return;
    }
    dispatch(login(form, navigate, setLoading));
  };

  return (
    <div className="container-fluid">
      <main>
        <div className="row h">
          <div className="col-lg-6 a img-bg d-flex justify-content-center align-items-center">
            <div className="icon-mama">
              <img src={Masak} className="img-fluid" alt="" />
            </div>
          </div>
          {/* form input  */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <section className="form-input">
              <div className="welcome text-center">
                <h3>Welcome</h3>
                <h6 className="my-4">Log in into your exiting account</h6>
              </div>
              <hr />
              {/* form */}
              <form onSubmit={handleSubmit}>
                <div className="mail">
                  <label for="email" className="form-label wb">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="examplexxx@gmail.com"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="psw mt-3">
                  <label for="password" className="form-label wb">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  <input
                    type="checkbox"
                    id="check"
                    className="ml-3"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label for="check" className="check wb">
                    I agree to terms & condition
                  </label>
                </div>

                {loading ? (
                  <button
                    type="submit"
                    className="btn btn-warning width-btn text-light my-3 wb"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-warning width-btn text-light wb"
                  >
                    Log in
                  </button>
                )}
              </form>
              <div className="forgot-psw my-3 d-flex justify-content-end wb">
                <p>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
              </div>
              <div className="sign-up d-flex justify-content-center wb">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="signup wb">
                    Sign Up
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
