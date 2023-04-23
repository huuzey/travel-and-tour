import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./footer.css";

const Footer = () => {
  const navlinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quicklinks2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  return (
    <div className="flex items-center justify-between mb-3 mt-3">
      <div className="w-56 ml-3">
        <img src={logo} alt="logo" className="w-20" />
        <h className="w-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempore aspernatur nam.
        </h>
        <div className="flex items-center justify-between">
          <span>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <i class="ri-youtube-fill"></i>
            </Link>
          </span>
          <span>
            <Link to={"#"}>
              <i class="ri-instagram-fill"></i>
            </Link>
          </span>
          <span>
            <Link to={"#"}>
              <i class="ri-facebook-circle-line"></i>
            </Link>
          </span>
          <span>
            <Link to={"#"}>
              <i class="ri-github-fill"></i>
            </Link>
          </span>
        </div>
      </div>
      <div className=" gap-2 flex flex-col">
        <h className="text-lg">Discover</h>
        <p>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            {" "}
            Home
          </Link>
        </p>
        <p>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            {" "}
            About
          </Link>
        </p>
        <p>
          <Link to={"/tour"} style={{ textDecoration: "none" }}>
            {" "}
            Tours
          </Link>
        </p>
      </div>
      <div className=" gap-2 flex flex-col">
        <h className="text-lg"> Quick links</h>
        <p>
          <Link to={"/gallery"} style={{ textDecoration: "none" }}>
            Gallery
          </Link>
        </p>
        <p>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            {" "}
            Login
          </Link>
        </p>
        <p>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            {" "}
            Register
          </Link>
        </p>
      </div>
      <div className=" gap-2 flex flex-col">
        <h className="text-lg">Contact</h>
        <div className="flex gap-2">
          <i class="ri-map-pin-fill"></i>
          <p>
            <span className="text-lg">Address:</span> Syllhet bangladesh
          </p>
        </div>
        <div className="flex gap-2">
          <i class="ri-mail-unread-line"></i>
          <p>
            <span className="text-lg">Email:</span> ddavehmid@gmail.com
          </p>
        </div>
        <div className="flex gap-2">
          <i class="ri-customer-service-line"></i>
          <p>
            <span className="text-lg">Phone:</span>+8299383922
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
