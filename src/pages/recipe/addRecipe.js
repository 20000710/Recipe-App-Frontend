import React, { Fragment } from 'react'
import FormAddRecipe from '../../components/form/formAddRecipe'
import NavbarMenu from '../../components/navbar/navbarMenu'
import './addRecipe.css'

const AddRecipe = () => {
  return (
    <Fragment>
        <NavbarMenu/>
        <FormAddRecipe/>
    </Fragment>
  )
}

export default AddRecipe