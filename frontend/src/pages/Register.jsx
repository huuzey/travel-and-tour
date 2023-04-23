import React from "react";
import loginimg from "../assets/images/register.png";
import usericon from "../assets/images/user.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [et, setet] = useState(false);
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const handleclick = (e) => {
    setcredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = async () => {
    try {
      const resp = await axios.post(`${BASE_URL}/auth/register`, credentials);
      navigate("/login");
      if (resp.data === "user is already exist") {
        setet(true);
      } else {
        setet(false);
      }
      console.log(resp.data);
      console.log("succefully sent the user");
    } catch (error) {
      console.log(error);
      console.log("u are cathed");
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
        {et && (
          <h className="text-sky-400 text-lg p-2 flex items-center gap-1 justify-center">
            You are already registered please <Link to={"/login"}> Login</Link>
          </h>
        )}

        <h className="text-lg mt-3 mb-2">Register</h>
        <input
          className=" border-b-2 mb-2 pl-2 border-b-sky-300"
          type="text"
          required
          onChange={handleclick}
          placeholder="username"
          name="username"
        />
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
          Register
        </button>
        <p className="p-2">
          Already have an account ?<Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
