import React from "react";
import world from "../assets/images/world.png";
import paris from "../assets/images/paris.jpg";
import china from "../assets/images/china.jpg";
import home from "../assets/images/hero-img01.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between ml-10 mt-10 mb-2   ">
      <div className="flex p-3 flex-col hover:text-sky-500 w-1/2 gap-4 bg-black hover:scale-105 hover:shadow-lg hover:shadow-sky-500 rounded-lg mr-6 shadow-xl shadow-sky-600">
        <div>
          <img src={world} className="w-[2.3rem] h-[2.3rem]" alt="world " />
        </div>
        <h className="font-bold ">Travelling opens the door</h>
        <h className="font-bold mt-0 ">
          to creating
          <span className="text-sky-500 px-1">memories</span>
        </h>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vel
          labore. Aspernatur, eos. Quam est quaerat id illum ab. Commodi dolores
          sed necessitatibus vitae asperiores quis non quam omnis praesentium.
        </p>
      </div>
      <div className="flex w-1/2 gap-2">
        <img
          src={paris}
          className="h-50 object-cover w-25  border-cyan-500 border-l rounded-full hover:scale-110"
          alt="some"
        />
        <img
          src={home}
          className="h-50 object-cover  w-25 border-cyan-500 border-l rounded-full hover:scale-110"
          alt=" spotes"
        />
        <img
          src={china}
          className="h-44 object-cover  w-25 border-cyan-500 border-l rounded-full hover:scale-110"
          alt=" spots"
        />
      </div>
    </div>
  );
};

export default Hero;
