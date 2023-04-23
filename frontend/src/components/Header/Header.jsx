import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const headerref = useRef(null);
  const traveler = useSelector((store) => store.traveler);
  console.log(traveler);

  const stickyheader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerref.current.classList.add("stickyheader");
      } else {
        headerref.current.classList.remove("stickyheader");
      }
    });
  };
  useEffect(() => {
    stickyheader();
    return window.removeEventListener("scroll", stickyheader);
  });
  const logout = () => {
    localStorage.clear();

    window.location.reload();
  };
  return (
    <header
      ref={headerref}
      className=" stickyheader flex items-center justify-between my-2 ml-2 sticky cursor-pointer overflow-hidden"
    >
      <div className="text-fuchsia-600 flex  ">
        <img src={logo} alt="logo" className="w-20 h-16" />
        <h className=" self-center">HUZE Tour and Travel</h>
      </div>
      <div className="flex gap-6 text-cyan-500">
        <h className="hover:scale-110 hover:text-cyan-800 text-cyan-500">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </h>

        <h className="hover:scale-110 hover:text-cyan-800">
          <Link to={"/about"} style={{ textDecoration: "none" }}></Link>
          About
        </h>

        <h className="hover:scale-110 hover:text-cyan-800">
          <Link to={"/tour"} style={{ textDecoration: "none" }}>
            Tour
          </Link>
        </h>
      </div>
      <div className="flex mr-4 py-0 items-center justify-center">
        <div className="flex gap-3 ">
          {traveler.user ? (
            <>
              <h className="hover:scale-110 text-amber-500    mt-2  rounded-full p-1 ">
                {traveler.user.username}
              </h>
              <button
                onClick={logout}
                className="hover:scale-110 text-sky-500   mt-2 buttons    rounded-full p-1 "
              >
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              <button className="hover:scale-110 text-sky-500  buttons  mt-2  rounded-full p-1 ">
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </button>
              <button className="hover:scale-110 text-sky-500   mt-2 buttons    rounded-full p-1 ">
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </button>
            </>
          )}
        </div>
        <span className="px-3">
          <i class="ri-menu-line"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
