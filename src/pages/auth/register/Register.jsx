import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import IconMasak from "../../../asset/img/wajan.svg";
import { register } from "../../../components/config/actions/userActions";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidation = (e) => {
    const confirm = e.target.value;
    setConfirmPasword(confirm);
    const cek = form.password;
    if (cek !== confirm) {
      setIsError("Password not match!");
    } else {
      setIsError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const cek = form.password;

    if (cek !== confirmPassword) {
      setLoading(false);
      return;
    } else if (!isChecked) {
      Swal.fire({
        text: "Please agree terms and condition",
        icon: "error",
      });
      console.log("Please agree terms and condition");
      setLoading(false);
      return;
    }
    dispatch(register(form, navigate, setLoading));
  };

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
              <hr />
              {/* form */}
              <form onSubmit={handleSubmit}>
                <div className="name">
                  <label for="name" className="form-label wb">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="email mt-3">
                  <label for="email" className="form-label wb">
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="Enter email address"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="phone mt-3">
                  <label for="phone" className="form-label wb">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                    placeholder="08xxxxxxxxxx"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className="new-psw mt-3">
                  <label for="new-psw" className="form-label wb">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="new-psw"
                    required
                    placeholder="Create new password"
                    name="password"
                    onChange={handleChange}
                  />
                  <p>
                    Password must include one lowercase character, one uppercase
                    character, a number, and a special character.
                  </p>
                </div>
                <div className="psw mt-3">
                  <label for="psw" className="form-label wb">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="psw"
                    required
                    placeholder="New Password"
                    name="newPassword"
                    onChange={(e) => checkValidation(e)}
                  />
                  <p className="text-danger">{isError}</p>
                </div>
                <div className="my-3">
                  <input
                    type="checkbox"
                    id="check"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label for="check" className="check wb">
                    I agree to terms & condition
                  </label>
                </div>
                {loading ? (
                  <button
                    type="submit"
                    className="btn btn-warning width-btn text-light my-3"
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
                    className="btn btn-warning width-btn text-light my-3 wb"
                  >
                    Sing Up
                  </button>
                )}
              </form>

              <div className="sign-up d-flex justify-content-center wb fz">
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
