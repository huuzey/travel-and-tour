import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../router/Router";

const Layout = ({ upload }) => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
      <p className="text-sky-300 flex items-center justify-center">
        Copyright 2023, design and develop by huzeyfa welela all rights
        reserved!
      </p>
    </div>
  );
};

export default Layout;
