import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

/**
 * `counterSlice` is a Redux slice that manages the state of the page number.
 *
 * @example
 * import { incrementPage } from "@/redux/counterSlice";
 * dispatch(incrementPage(1));
 *
 * @description
 * This slice has a single reducer: `incrementPage`, which updates the state with the payload.
 *
 * The `counterSlice` slice returns the `incrementPage` action and the reducer.
 */

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
