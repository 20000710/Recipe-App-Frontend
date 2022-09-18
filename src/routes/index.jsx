import React from "react";
import Login from "../pages/auth/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddRecipe from "../pages/recipe/addRecipe";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/profile/profile";
import DetailReceipe from "../pages/detail_receipe/DetailReceipe";
import VideoPage from "../pages/video_page/VideoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailreceipe" element={<DetailReceipe />} />
        <Route path="video_page" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
