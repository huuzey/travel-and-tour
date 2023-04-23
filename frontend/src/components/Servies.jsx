import React from "react";

const Servies = ({ item }) => {
  const { image, title, desc } = item;
  return (
    <div>
      <div>{image}</div>
      <h className="text-black">{title}</h>
      <p>{desc}</p>
    </div>
  );
};

export default Servies;
