import React from "react";
import loginimg from "../assets/images/login.png";
import usericon from "../assets/images/user.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtrave, getuser } from "../reducer";
import axios from "axios";
import { BASE_URL } from "../App";

const Login = () => {
  const traveler = useSelector((store) => store.traveler);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const handleclick = (e) => {
    setcredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, credentials);

      localStorage.setItem("user", JSON.stringify(data));
      console.log("successfully fetched login user");
      dispatch(addtrave());

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <img src={loginimg} alt="logoin " className="w-90 h-80" />
      </div>
      <div className="relative shadow-2xl flex flex-col items-center justify-center border-t-2 rounded-md  border-t-sky-300">
        <img
          src={usericon}
          alt="usericon"
          className="w-12 h-12 absolute -top-8"
        />
        <h className="text-lg mt-3 mb-2">Login</h>
        <input
          className=" border-b-2 mb-2 pl-2 border-b-sky-300"
          type="email"
          required
          onChange={handleclick}
          placeholder="email"
          name="email"
        />
        <input
          className="border-b-2 mb-2 pl-2  border-b-sky-300"
          type="password"
          required
          onChange={handleclick}
          placeholder="password"
          name="password"
        />
        <button
          onClick={handlesubmit}
          className="bg-cyan-500 rounded-2xl px-2 mt-2 mb-2  text-yellow-400 hover:bg-cyan-950 hover:scale-105"
        >
          Login
        </button>
        <p className="p-2">
          Don't have an account <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
