import { createSlice } from "@reduxjs/toolkit";
import { TApiResponse } from "@/types/restaurants";

const initialState: TApiResponse | [] = [];

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    setRestaurants: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRestaurants } = restaurantsSlice.actions;
