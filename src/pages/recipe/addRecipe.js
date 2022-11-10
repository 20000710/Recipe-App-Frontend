import React, { Fragment } from "react";
import Footer from "../../components/Footer/index";
import FormAddRecipe from "../../components/form/formAddRecipe";
import NavbarMenu from "../../components/navbar/navbarMenu";
import jwt_decode from "jwt-decode";

const AddRecipe = () => {
  let token = localStorage.getItem("token");
  const decode = jwt_decode(token);
  const { id } = decode;
  console.log("decode: ", decode);
  return (
    <Fragment>
      <NavbarMenu
        menu1="Home"
        menu2="Add Recipe"
        menu3="Profile"
        link1={"/home"}
        link2={"/add-recipe"}
        link3={`/profile/${id}`}
      />
      <FormAddRecipe id_user={id} />
      <Footer />
    </Fragment>
  );
};

export default AddRecipe;
