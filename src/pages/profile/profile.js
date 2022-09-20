import React from 'react'
import ProfileAvatar from '../../components/avatar/profileAvatar'
import FooterRecipe from '../../components/footer/footerRecipe'
import profileImg from '../../asset/img/profile-img.png'
import NavbarMenu from '../../components/navbar/navbarMenu'
import GaleryImg from '../../components/galeryImage/galeryImg'
import myRecipe1 from '../../asset/img/myrecipe1.png'
import myRecipe2 from '../../asset/img/myrecipe2.png'

const Profile = () => {
  return (
    <div>
      <NavbarMenu menu1="Home" menu2="Add Recipe" menu3="Profile" />
      <ProfileAvatar img={profileImg} />
      <NavbarMenu menu1="My Recipe" menu2="Saved Recipe" menu3="Liked Recipe" />
      <hr style={{ border: '1px solid #DFDFDF', marginBottom: '50px' }} />
      <div className="d-flex container flex-row" style={{ marginBottom: '61px' }}>
        <GaleryImg img={myRecipe1} caption="Bomb Chicken" name="galery-img1">
        </GaleryImg>
        <GaleryImg img={myRecipe2} caption="Banana Puncake" name="galery-img2" />
      </div>
      <FooterRecipe />
    </div>
  )
}

export default Profile