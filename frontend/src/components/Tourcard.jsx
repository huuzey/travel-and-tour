import React from "react";
import { Link } from "react-router-dom";
import average from "./avgRating";
import axios from "axios";
import { BASE_URL } from "../App";
import { useSelector } from "react-redux";

const Tourcard = ({ tour }) => {
  const { photo, title, reviews, featured, city, price, _id } = tour;
  const { totalrating, avgRating } = average(reviews);
  const traveler = useSelector((store) => store.traveler);
  const deletetur = async () => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/place/${_id}?accesstoken=${traveler.user.token}`
      );
      console.log("successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3 overflow-hidden shadow-xl  ">
      <div className="relative flex ">
        <img src={photo} alt="place" className="w-60 h-52 rounded-lg " />
        {featured && (
          <>
            <p className="absolute b-3 r-0 bg-black text-sky-500 rounded-full px-2">
              Featured
            </p>
          </>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <i class="ri-map-pin-line"></i>
          <span>{city}</span>
        </div>
        <div className="flex">
          <i class="ri-star-s-fill"></i>
          <span>{totalrating === 0 ? "not rated" : avgRating}</span>
          <span>({avgRating === 0 ? "" : reviews?.length})</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>{title}</span>
      </div>
      <div className="flex items-center justify-between ">
        <span>
          <span className="text-yellow-400">${price}</span> / per person
        </span>
        <Link to={`/tour/${_id}`} style={{ textDecoration: "none" }}>
          <button className="bg-cyan-500 rounded-2xl px-2  text-yellow-400 hover:bg-cyan-950 hover:scale-105 ">
            Book now
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Tourcard;
