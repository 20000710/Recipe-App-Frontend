import React, { Fragment } from "react";
import Footer from "../../components/footer/index";
import FormAddRecipe from "../../components/form/formAddRecipe";
import NavbarMenu from "../../components/navbar/navbarMenu";

const AddRecipe = () => {
  return (
    <Fragment>
      <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" />
      <FormAddRecipe />
      <Footer />
    </Fragment>
  );
};

export default AddRecipe;
