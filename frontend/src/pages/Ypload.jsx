import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Image } from "cloudinary-react";
import { BASE_URL } from "../App";
import "./ypload.css";
const Ypload = () => {
  const [image, setImage] = useState("");
  const [cloudy, setcloud] = useState(null);
  const [imagesid, setimagesid] = useState();
  const [photo, setphoto] = useState();
  const [promblem, setpromblem] = useState("");
  const fileref = useRef();
  const [inputelements, setinputelements] = useState({
    title: "",
    desc: "",
    price: "",
    address: "",
    maxGroupSize: "",
    city: "",
    distance: "",
    featured: false,
    reviews: [],
  });
  const inputHandle = (e) => {
    if (e.target.files.length !== 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      setphoto(formData);
      setpromblem("");
    }
  };
  const senddata = async (clo) => {
    try {
      const res = await axios.post(`${BASE_URL}/place/addtour`, {
        img: clo,
        main: inputelements,
      });
      console.log(res);
      if (res.data) {
        setphoto(null);
        setpromblem("");
      }
      console.log("successfully sent");
    } catch (error) {
      setphoto(null);
      setpromblem("");

      console.log(error);
    }
  };

  const submit = async () => {
    if (
      inputelements.title &&
      inputelements.maxGroupSize &&
      inputelements.price &&
      inputelements.distance &&
      inputelements.city &&
      inputelements.address
    ) {
      if (photo) {
        try {
          const response = await axios.post(
            "http://localhost:8000/image-upload",
            photo
          );

          senddata(response.data);
          cloudimages();
          setinputelements({
            title: "",
            desc: "",
            maxGroupSize: "",
            price: "",
            distance: "",
            city: "",
            address: "",
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    if (
      !inputelements.title ||
      !inputelements.maxGroupSize ||
      !inputelements.price ||
      !inputelements.distance ||
      !inputelements.city ||
      !inputelements.address ||
      !photo
    ) {
      setpromblem("All fields are required");
    }
  };

  const cloudimages = async () => {
    try {
      const resp = await fetch("http://localhost:8000/image-get");
      const data = await resp.json();
      setimagesid(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cloudimages();
  }, []);
  const inputs = (e) => {
    setpromblem("");
    setinputelements((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(photo);
  console.log(cloudy);
  return (
    <div className=" flex flex-col items-center justify-center rounded-full">
      {promblem && <h className="text-red-500">{promblem}</h>}
      <div className=" shadow-2xl mt-4 mb-2 w-1/3 rounded-full p-16 flex flex-col items-center justify-center">
        <div className="mb-2 ">
          <label className="  gap-1  border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
            <input type="file" className="hidden" onChange={inputHandle} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </label>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 ">
          <input
            onChange={inputs}
            type="text"
            name="title"
            value={inputelements.title}
            placeholder="add a title"
            className=" focus:w-[200%]"
          />
          <input
            onChange={inputs}
            type="text"
            name="city"
            value={inputelements.city}
            placeholder="add a city"
            className="focus:w-[200%]"
          />
          <input
            onChange={inputs}
            type="text"
            value={inputelements.address}
            name="address"
            placeholder="add a address"
            className="focus:w-[200%]"
          />
          <input
            onChange={inputs}
            type="text"
            name="desc"
            value={inputelements.desc}
            placeholder="add a description"
            className="focus:w-[200%]"
          />
          <input
            onChange={inputs}
            value={inputelements.distance}
            type="number"
            name="distance"
            className="focus:w-[50%]"
            placeholder="distance ?"
          />
          <input
            onChange={inputs}
            value={inputelements.maxGroupSize}
            type="number"
            name="maxGroupSize"
            className="focus:w-[50%]"
            placeholder=" people ?"
          />
          <input
            onChange={inputs}
            value={inputelements.price}
            type="number"
            name="price"
            className="focus:w-[50%]"
            placeholder="price?"
          />
          <button
            className="flex bg-fuchsia-400 w-1/3 rounded-full hover:scale-105 hover:bg-fuchsia-700 items-center justify-center mb-2 mt-2 "
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {imagesid &&
          imagesid.map((imageid, index) => (
            <Image
              key={index}
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={imageid}
              width="300"
              height="200"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
};

export default Ypload;
