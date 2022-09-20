import React from 'react'
import ProfileAvatar from '../../components/avatar/profileAvatar'
import FooterRecipe from '../../components/footer/footerRecipe'
import profileImg from '../../asset/img/profile-img.png'
import NavbarMenu from '../../components/navbar/navbarMenu'
import myRecipe from '../myRecipe/myRecipe'

const Profile = () => {
  return (
    <div>
      <NavbarMenu 
        menu1="Home" 
        menu2="Add Recipe" 
        menu3="Profile"
        link1="/home"
        link2="/add-recipe"
        link3="/profile" />
      <ProfileAvatar img={profileImg} />
      <NavbarMenu 
        menu1="My Recipe" 
        menu2="Saved Recipe" 
        menu3="Liked Recipe"
        link1="/#my-recipe"
        link2="/#saved-recipe"
        link3="/#liked-recipe" />
      <hr style={{ border: '1px solid #DFDFDF', marginBottom: '50px' }} />
      <myRecipe />
      <FooterRecipe />
    </div>
  )
}

export default Profile