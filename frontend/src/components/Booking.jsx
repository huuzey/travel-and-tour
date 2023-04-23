import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";

const Booking = ({ tour, avg, totalrate }) => {
  const { price, reviews, title } = tour;
  const traveler = useSelector((store) => store.traveler);
  const [credentials, setcredentials] = useState({
    userId: traveler && traveler.user?._id,
    userEmail: traveler && traveler.user?.username,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });
  const calculate = () => {
    return Number(price) * Number(credentials.guestSize);
  };
  const handleclick = (e) => {
    setcredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const handlesubmit = async () => {
    if (!traveler.user) {
      return alert("please register to make a book");
    }
    try {
      const { data } = await axios.post(
        `${BASE_URL}/booking/create`,
        credentials
      );

      console.log(data);
      navigate("/thankyou");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border-2 border-sky-200 ">
      <div className="flex items-center gap-8 pl-2 justify-between mb-2">
        <h className="">
          <span className="text-lg text-sky-400">${price} </span>/per person
        </h>
        <h>
          <i class="ri-star-s-fill"></i>
          {totalrate === 0 ? "not rated" : ""}
          {avg === 0 ? "" : avg} ({reviews?.length})
        </h>
      </div>
      <div className="flex flex-col p-2 gap-2">
        <h className="p-2 text-lg ">Information</h>
        <input
          type="text "
          required
          placeholder="Full Name"
          name="fullName"
          onChange={handleclick}
        />
        <input
          required
          type="number"
          placeholder="Phone"
          name="phone"
          onChange={handleclick}
        />
        <input required type="date" name="bookAt" onChange={handleclick} />
        <input
          required
          type="number"
          placeholder="Guests"
          name="guestSize"
          onChange={handleclick}
        />
      </div>
      {credentials.guestSize && (
        <div>
          <div className="flex items-center justify-between p-2">
            <h>
              {price} * {credentials.guestSize}
            </h>
            <p>${calculate()}</p>
          </div>
          <div className="flex justify-between items-center p-2">
            <p>service charge</p>
            <p>$10</p>
          </div>
          <div className="flex justify-between items-center p-2">
            <p className="text-lg">Total</p>
            <p>${calculate() + 10}</p>
          </div>
          <div className="p-2">
            <button
              className="bg-sky-400 items-center justify-center w-full rounded-full"
              onClick={handlesubmit}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
