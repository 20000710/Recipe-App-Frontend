import React from "react";
import { Link } from "react-router-dom";
import IconMasak from "../../../asset/img/wajan.svg";
import "./register.css";

const Register = () => {
  return (
    <div className="container-fluid">
      <main>
        <div className="row h">
          <div className="col-lg-6 a img-bg d-flex justify-content-center align-items-center">
            <div className="icon-mama">
              <img src={IconMasak} className="img-fluid" alt="" />
            </div>
          </div>
          {/* form input */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <section className="form-input py-3">
              <div className="welcome text-center">
                <h3>Let's Get Started !</h3>
                <h6 className="my-4">
                  Create new account to access all features
                </h6>
              </div>
              <form>
                <div className="name">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="email mt-3">
                  <label for="email" className="form-label">
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="Enter email address"
                  />
                </div>
                <div className="phone mt-3">
                  <label for="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div className="new-psw mt-3">
                  <label for="new-psw" className="form-label">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="new-psw"
                    required
                    placeholder="Create new password"
                  />
                </div>
                <div className="psw mt-3">
                  <label for="psw" className="form-label">
                    New Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                    placeholder="New Password"
                  />
                </div>
                <div className="my-3">
                  <input type="checkbox" id="check" />
                  <label for="check" className="check">
                    I agree to terms & condition
                  </label>
                </div>
                <button className="btn btn-warning width-btn text-light my-3">
                  Register Account
                </button>
              </form>

              <div className="sign-up d-flex justify-content-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="login-here">
                    Log in Here
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

export default Register;
