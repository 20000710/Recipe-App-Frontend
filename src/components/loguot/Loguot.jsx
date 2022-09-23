import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Loguot = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <Fragment>
      <Link to="/login">
        <button class="btn me-5" type="submit" onClick={logOut}>
          Log out
        </button>
      </Link>
    </Fragment>
  );
};

export default Loguot;
