import React from "react";
import male from "../assets/images/male-tourist.png";
import "./newletter.css";

const Newsletter = () => {
  return (
    <div className="flex items-center justify-around bg-amber-400 mt-4 ">
      <div className="ml-3 w-1/3">
        <h className="text-3xl">
          Subscribe now to get useful <br /> travelling information
        </h>
        <div className=" relative mt-2">
          <input
            type="text "
            placeholder="type your email ?"
            className=" border-none w-30 rounded-3xl p-1  w-80 focus:border-current focus:ring-0
            "
          />
          <button className="absolute left-60 text-white bg-sky-400  rounded-xl px-1 top-1 hover:bg-sky-800">
            subscribe
          </button>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quaerat
          accusantium optio obcaecati esse alias blanditiis explicabo?
          Distinctio, vitae voluptatem corrupti quisquam impedit voluptatibus
          odit iure omnis ea? Enim, maiores.
        </p>
      </div>
      <div>
        <img src={male} alt="tourist" className="w-full" />
      </div>
    </div>
  );
};

export default Newsletter;
