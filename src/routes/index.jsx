import React from "react";
import Login from "../pages/auth/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "../components/auth/Auth";
import AddRecipe from "../pages/recipe/addRecipe";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/profile/profile";
import DetailReceipe from "../pages/detail_receipe/DetailReceipe";
import VideoPage from "../pages/video_page/VideoPage";
import Home from "../pages/home/Home";
import Recipe from "../pages/recipe/Recipe";
import MyRecipe from "../pages/myRecipe/myRecipe";
import SearchRecipe from "../pages/searchRecipe/searchRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/detail-recipe/:id"
          element={
            <Auth>
              <DetailReceipe />
            </Auth>
          }
        />
        <Route path="/myRecipe" element={<MyRecipe />} />
        <Route path="/searchRecipe" element={<SearchRecipe />} />
        <Route
          path="/video-page"
          element={
            <Auth>
              <VideoPage />
            </Auth>
          }
        />
        <Route
          path="/add-recipe"
          element={
            // <Auth>
            <Recipe />
            // </Auth>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
