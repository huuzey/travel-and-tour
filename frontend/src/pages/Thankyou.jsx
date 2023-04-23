import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="ml-4 flex flex-col items-center justify-center">
      <div className="text-green-500">
        <i class="ri-check-double-line"></i>
      </div>
      <h className="text-3xl text-sky-500">Thank You</h>
      <p className="text-3xl text-sky-500"> Your tour is booked</p>
      <button className="bg-cyan-500 rounded-2xl px-2  text-yellow-400 hover:bg-cyan-950 hover:scale-105 ">
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          Back to home
        </Link>
      </button>
    </div>
  );
};

export default Thankyou;
