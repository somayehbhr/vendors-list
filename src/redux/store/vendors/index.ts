import { createSlice } from "@reduxjs/toolkit";
import { TFinalResult } from "@/types/vendors";

const initialState: TFinalResult | [] = [];

/**
 * `vendorsReducer` is a Redux slice that manages the state of the vendors.
 *
 * @example
 * import { setVendors, updateVendors } from "@/redux/vendorsReducer";
 * dispatch(setVendors(vendors));
 * dispatch(updateVendors(newVendors));
 *
 * @description
 * This slice has two reducers: `setVendors` and `updateVendors`.
 * `setVendors` replaces the current state with the payload.
 * `updateVendors` appends the payload to the current state.
 *
 * The `vendorsReducer` slice returns the `setVendors` and `updateVendors` actions and the reducer.
 */

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
