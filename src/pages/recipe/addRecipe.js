import React, { Fragment } from 'react'
import Footer from '../../components/footer/footerRecipe'
import FormAddRecipe from '../../components/form/formAddRecipe'
import NavbarMenu from '../../components/navbar/navbarMenu'

const AddRecipe = () => {
  return (
    <Fragment>
        <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" link1={"/home"} link2={"/add-recipe"} link3={"/profile"}/>
        <FormAddRecipe/>
        <Footer/>
    </Fragment>
  )
}

export default AddRecipe