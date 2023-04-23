import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tourdata from "../assets/data/tours";
import average from "../components/avgRating";
import "../components/hide.css";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking";
import Newsletter from "../components/Newsletter";
import useFetch from "../components/fetch";
import { BASE_URL } from "../App";
import { useSelector } from "react-redux";
import axios from "axios";

const TourDetails = () => {
  const [revmes, setrevmes] = useState("");
  const [thought, setthoght] = useState("");
  const { id } = useParams();
  const traveler = useSelector((store) => store.traveler);
  const { datas: tour } = useFetch(`${BASE_URL}/place/byid/${id}`);
  const submithandler = async () => {
    if (!traveler.user) {
      return alert("Please register to add a review");
    }
    try {
      const res = await axios.post(`${BASE_URL}/review/${id}`, {
        username: traveler.user.username,
        reviewText: thought,
        rating: revmes,
      });
      console.log("review added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    photo,
    desc,
    title,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalrating, avgRating } = average(reviews);
  const option = { date: "numeric", month: "long", year: "numeric" };
  return (
    <div>
      <div className="flex  items-start justify-center">
        <div className="   gap-y-2 text-sky-500">
          <div className="">
            <div>
              <img
                src={photo}
                alt="places"
                className="h-1/2 m-2 rounded-md ml-2 w-5/6"
              />
            </div>
            <div className="border-2 border-neutral-200 w-5/6 shadow-2xl ml-3 mt-5">
              <div className="ml-4 flex flex-col gap-y-2">
                <div className="gap-y-2">
                  <p className="text-lg">{title}</p>
                </div>
                <div className="flex gap-3">
                  <div>
                    <i class="ri-star-s-fill"></i>
                    <span>{totalrating === 0 ? "not rated" : avgRating}</span>
                    <span>({avgRating === 0 ? "" : reviews?.length})</span>
                  </div>
                  <div>
                    <i class="ri-map-pin-user-line"></i>
                    <span>{address}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <i class="ri-map-pin-fill"></i>
                    <span> {city}</span>
                  </div>
                  <div className="flex gap-1">
                    <i class="ri-money-dollar-circle-fill"></i>
                    <span>${price}/Per person</span>
                  </div>
                  <div className="flex gap-1">
                    <i class="ri-map-pin-time-line"></i>
                    <span>{distance} k/m</span>
                  </div>
                  <div className="flex gap-1">
                    <i class="ri-group-line"></i>
                    <span>{maxGroupSize} people</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h className="text-lg">Description</h>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-neutral-200 w-5/6 shadow-2xl ml-3  mt-3 pb-3 pl-3 pt-2">
            <div className="pb-2">
              <h>Reviews ( {reviews?.length} review)</h>
            </div>
            <div className="flex gap-2 mb-2">
              <span onClick={() => setrevmes(1)} className="hover:scale-110 ">
                1<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setrevmes(2)} className="hover:scale-110 ">
                2<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setrevmes(3)} className="hover:scale-110 ">
                3<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setrevmes(4)} className="hover:scale-110 ">
                4<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setrevmes(5)} className="hover:scale-110 ">
                5<i class="ri-star-s-fill"></i>
              </span>
            </div>
            <div className=" ">
              <input
                type="text "
                placeholder="could your share your thought?"
                className="w-72 mb-2 border-2 rounded-md border-sky-300 p-1 gap-1 ml-1 mr-2"
                value={thought}
                onChange={(e) => setthoght(e.target.value)}
              />
              <button
                onClick={submithandler}
                className="  bg-cyan-500 rounded-2xl px-2  text-yellow-400 hover:bg-cyan-950 hover:scale-105 "
              >
                submit
              </button>
            </div>
            <div className="mt-3">
              {reviews?.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img src={avatar} alt="avatar" className="w-14 h-14" />
                    </div>
                    <div className="self-start justify-self-start">
                      <p>{item.username}</p>
                      <p>
                        {new Date(item.createdAt).toLocaleDateString(
                          "en-us",
                          option
                        )}
                      </p>
                      <p>{item.reviewText}</p>
                    </div>
                  </div>
                  <div>
                    {item.rating}
                    <i class="ri-star-s-fill"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sticky top-28 ">
          <Booking tour={tour} avg={avgRating} totalrate={totalrating} />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default TourDetails;
