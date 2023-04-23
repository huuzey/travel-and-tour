import React from "react";
import av1 from "../assets/images/ava-1.jpg";
import av2 from "../assets/images/ava-2.jpg";
import av3 from "../assets/images/ava-3.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...setting}>
      <div className="py-3 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias
          suscipit quae quas, aut labore a fugit tempora nobis hic nam odit amet
          totam, maiores unde molestiae nisi? Recusandae, id?
        </p>
        <div className="gap-4 mt-3 flex flex-col items-center">
          <img src={av3} alt="customer" className="w-25 h-25" />
          <div>
            <h5 className="mb-0 mt-3">Arron walters</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="py-3 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias
          suscipit quae quas, aut labore a fugit tempora nobis hic nam odit amet
          totam, maiores unde molestiae nisi? Recusandae, id?
        </p>
        <div className="gap-4 mt-3 flex flex-col items-center">
          <img src={av1} alt="customer" className="w-25 h-25" />
          <div>
            <h5 className="mb-0 mt-3">Mark Arnauld</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="py-3 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias
          suscipit quae quas, aut labore a fugit tempora nobis hic nam odit amet
          totam, maiores unde molestiae nisi? Recusandae, id?
        </p>
        <div className="gap-4 mt-3 flex flex-col items-center">
          <img src={av2} alt="customer" className="w-25 h-25" />
          <div>
            <h5 className="mb-0 mt-3">Filipe jonas</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="py-3 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias
          suscipit quae quas, aut labore a fugit tempora nobis hic nam odit amet
          totam, maiores unde molestiae nisi? Recusandae, id?
        </p>
        <div className="gap-4 mt-3 flex flex-col items-center">
          <img src={av3} alt="customer" className="w-25 h-25" />
          <div>
            <h5 className="mb-0 mt-3">uruara tites</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="py-3 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias
          suscipit quae quas, aut labore a fugit tempora nobis hic nam odit amet
          totam, maiores unde molestiae nisi? Recusandae, id?
        </p>
        <div className="gap-4 mt-3 flex flex-col items-center">
          <img src={av1} alt="customer" className="w-25 h-25" />
          <div>
            <h5 className="mb-0 mt-3">John doe</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
