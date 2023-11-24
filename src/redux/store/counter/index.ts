import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const counterSlice = createSlice({
  name: "pageNumber",
  initialState,
  reducers: {
    incrementPage: (state, action: { payload: number }) => {
      state = action.payload;
      return state;
    },
  },
});

export const { incrementPage } = counterSlice.actions;

export default counterSlice.reducer;
