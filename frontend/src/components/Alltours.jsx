import React from "react";
import "./alltours.css";

const Alltours = ({ title }) => {
  return (
    <section className="common flex rounded-lg m-1 items-center justify-center">
      <h className="text-white text-4xl">{title}</h>
    </section>
  );
};

export default Alltours;
