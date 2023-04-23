import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import Thankyou from "../pages/Thankyou";
import Ypload from "../pages/Ypload";

const Router = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tour" element={<Tours />} />
      <Route path="/place/search/getbysearch" element={<SearchResultList />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="/uploadfile" element={<Ypload />} />
    </Routes>
  );
};

export default Router;
