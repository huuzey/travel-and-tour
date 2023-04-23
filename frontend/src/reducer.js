import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./App";
import { useEffect } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  error: "",

  loading: false,
  status: "idle",
};

export const getuser = createAsyncThunk("user/get", async (ced) => {
  try {
    const resp = await axios.post(`${BASE_URL}/auth/login`, ced);
    console.log("successfully fetched a user");
    return resp.data;
  } catch (error) {
    console.log(error);
    console.log("cathing");
  }
});

const userslice = createSlice({
  name: "traveler",
  initialState,
  reducers: {
    addtrave: (state, action) => {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
  },
});

export default userslice.reducer;
export const { addtrave } = userslice.actions;
