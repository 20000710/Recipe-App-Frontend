import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container-fluid">
      <main>
        <div className="row h">
          <div className="col-lg-6 a img-bg d-flex justify-content-center align-items-center">
            <div className="icon-mama">
              <img src="./asset/img/wajan.svg" className="img-fluid" alt="" />
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
                  <input type="checkbox" />
                  <span>I agree to terms & condition</span>
                </div>
                <button className="btn btn-warning width-btn">Log in</button>
              </form>
              <div className="forgot-psw my-3 d-flex justify-content-end">
                <p>
                  Forgot <a href="#">password?</a>
                </p>
              </div>
              <div className="sign-up d-flex justify-content-center">
                <p>
                  Don't have an account? <a href="#">Sign Up</a>
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
