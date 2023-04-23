import React from "react";
import exper from "../assets/images/experience.png";

const Experience = () => {
  return (
    <div className="flex items-center justify-around mb-2">
      <div>
        <div className="mb-2 text-cyan-400 flex flex-col items-center justify-center">
          <h className="text-4xl">With all our experience</h>
          <h className="text-2xl">we will serve you</h>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          minus fuga officia ullam dolor, ipsam eveniet aliquid. Adip
        </p>
        <div className="flex items-center justify-between ">
          <div>
            <h className="bg-sky-500 rounded-2xl p-2 mb-2">12K+</h>
            <p className="pt-2">Successful trip</p>
          </div>
          <div>
            <h className="bg-sky-500 rounded-2xl p-2 mb-2">2K+</h>
            <p className="pt-2">Regular trip</p>
          </div>
          <div>
            <h className="bg-sky-500 rounded-2xl p-2 mb-2">15</h>
            <p className="pt-2">Years experience</p>
          </div>
        </div>
      </div>
      <div>
        <img src={exper} alt="experience" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Experience;
