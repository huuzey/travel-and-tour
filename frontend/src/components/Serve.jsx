import React from "react";
import Servies from "./Servies";

const Serve = () => {
  const data = [
    {
      image: <i class="ri-cloud-fill"></i>,
      title: "calculate weather",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque dolorem dolor hic, at nemo necessitatibus ea? Molestias in placeat sapiente, architecto ex iure tenetur ratione ipsa. Iusto, at rerum!",
    },
    {
      image: <i class="ri-focus-2-line"></i>,
      title: "Best tour guide",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque dolorem dolor hic, at nemo necessitatibus ea? Molestias in placeat sapiente, architecto ex iure tenetur ratione ipsa. Iusto, at rerum!",
    },
    {
      image: <i class="ri-building-4-line"></i>,
      title: "customization",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque dolorem dolor hic, at nemo necessitatibus ea? Molestias in placeat sapiente, architecto ex iure tenetur ratione ipsa. Iusto, at rerum!",
    },
  ];
  return (
    <div className=" ml-10 text-sky-500 flex  mt-7 justify-between">
      <div className="flex flex-col w-1/3 items-cente justify-center ml-10">
        <h className="text-black text-4xl">What we serve</h>
        <h className="bold text-3xl">We Offer Our </h>
        <h className="text-3xl">Best Services</h>
      </div>
      <div className="flex gap-4 w-2/3">
        {data.map((item, i) => {
          return <Servies item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Serve;
