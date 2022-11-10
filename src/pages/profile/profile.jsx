import React, { useEffect } from "react";
import ProfileAvatar from "../../components/avatar/profileAvatar";
import Footer from "../../components/Footer/index";
import profileImg from "../../asset/img/profile-img.png";
import NavbarMenu from "../../components/navbar/navbarMenu";
import MyRecipe from "../myRecipe/myRecipe";
import getDetailUser from "../../components/config/actions/getDetailUserActions";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import getLikedRecipe from "../../components/config/actions/getlikedRecipeActions";
import getSavedRecipe from "../../components/config/actions/getSavedRecipeActions";

const Profile = () => {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.userProfile);
  const { likedRecipe } = useSelector((state) => state.recipe);
  const { savedRecipe } = useSelector((state) => state.recipe);
  let token = localStorage.getItem("token");
  const decode = jwt_decode(token);
  const id = decode.id;

  useEffect(() => {
    dispatch(getDetailUser(id, token));
    dispatch(getLikedRecipe(token));
    dispatch(getSavedRecipe(token));
  }, []);

  return (
    <div>
      <NavbarMenu
        menu1="Home"
        menu2="Add Recipe"
        menu3="Profile"
        link1="/home"
        link2="/add-recipe"
        idParam={id}
        link3={`/profile/${id}`}
      />
      <ProfileAvatar
        profileName={detailUser.name}
        photo={detailUser.photo}
        img={profileImg}
      />
      <MyRecipe likedRecipe={likedRecipe} savedRecipe={savedRecipe} />
      <Footer />
    </div>
  );
};

export default Profile;
