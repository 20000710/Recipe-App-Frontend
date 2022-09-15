import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../../asset/img/Mask Group.svg";
import Masak from "../../../asset/img/wajan.svg";
import "./login.css";

const Login = () => {
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
              <form>
                <div className="mail">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="examplexxx@gmail.com"
                  />
                </div>
                <div className="psw mt-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="my-3">
                  <input type="checkbox" id="check" className="ml-3" />
                  <label for="check" className="check">
                    I agree to terms & condition
                  </label>
                </div>
                <button className="btn btn-warning width-btn text-light">
                  Log in
                </button>
              </form>
              <div className="forgot-psw my-3 d-flex justify-content-end">
                <p>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
              </div>
              <div className="sign-up d-flex justify-content-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="signup">
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
