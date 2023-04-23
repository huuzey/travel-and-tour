import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Serve from "../components/Serve";
import Featured from "../components/Featured";
import Experience from "../components/Experience";
import MasonryImage from "../components/Masonry";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <p>
        <Link to={"/uploadfile"}>upload</Link>
      </p>
      <Search />
      <Serve />
      <Featured />
      <Experience />
      <MasonryImage />
      <p className="text-sky-400 text-lg flex  items-center justify-center">
        What our fans say about us
      </p>
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
