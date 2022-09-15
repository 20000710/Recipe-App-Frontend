import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddRecipe from "../components/pages/recipe/addRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace="true"/>}/>
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
