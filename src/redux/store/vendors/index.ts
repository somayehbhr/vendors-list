import { createSlice } from "@reduxjs/toolkit";
import { TFinalResult } from "@/types/vendors";

const initialState: TFinalResult | [] = [];

export const vendorsReducer = createSlice({
  name: "vendors",
  initialState: initialState,
  reducers: {
    setVendors: (_, action: { payload: TFinalResult; type: string }) => {
      return action.payload;
    },
    updateVendors: (state, action: { payload: TFinalResult; type: string }) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setVendors, updateVendors } = vendorsReducer.actions;
