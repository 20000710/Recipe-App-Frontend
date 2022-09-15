import React from "react";
import { Fragment } from "react";
import Login from "../pages/auth/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/auth/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
