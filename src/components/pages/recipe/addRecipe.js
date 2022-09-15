import React, { Fragment } from 'react'
import FormAddRecipe from '../../form/formAddRecipe'
import NavbarMenu from '../../navbar/navbarMenu'
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