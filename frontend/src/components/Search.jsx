import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import axios from "axios";

const Search = () => {
  const locationref = useRef("");
  const distanceref = useRef(0);
  const maxref = useRef(0);
  const navigate = useNavigate();
  const searchhandler = async () => {
    const location = locationref.current.value;
    const distance = distanceref.current.value;
    const peopler = maxref.current.value;
    if (!location || !distance || !peopler) {
      return alert("all three fields are required");
    }
    try {
      const resp = await axios.get(
        `${BASE_URL}/place/search/getbysearch?city=${location}&distance=${distance}&maxGroupSize=${peopler}`
      );
      navigate(
        `/place/search/getbysearch?city=${location}&distance=${distance}&maxGroupSize=${peopler}`,
        { state: resp.data }
      );
      console.log({ searchdata: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/2 flex items-center justify-between shadow-lg ml-10 mt-2 rounded-xl">
      <div className="flex p-2 ">
        <div className="flex items-center justify-center pr-2">
          <i class="ri-map-pin-fill"></i>
        </div>
        <div>
          <p className="">Location</p>
          <input
            type="text"
            className=" border-2 rounded-md border-sky-300	"
            placeholder="where are you going?"
            ref={locationref}
          />
        </div>
      </div>
      <div className="flex p-2">
        <div className="flex items-center justify-center pr-2">
          <i class="ri-pin-distance-line"></i>{" "}
        </div>
        <div>
          <p className="">Distance</p>
          <input
            type="number"
            className=" border-2 rounded-md border-sky-300	w-16"
            ref={distanceref}
          />
        </div>
      </div>
      <div className="mr-2 flex p-2 ">
        <div className="flex items-center justify-center pr-2">
          <i class="ri-group-fill"></i>
        </div>
        <div>
          <p className="">People</p>
          <input
            type="number"
            className=" border-2 rounded-md border-sky-300 w-16	"
            ref={maxref}
          />
        </div>
      </div>
      <div
        className="mr-2 bg-sky-300 rounded-md items-center justify-center p-1 "
        onClick={searchhandler}
      >
        <i class="ri-search-line"></i>
      </div>
    </div>
  );
};

export default Search;
