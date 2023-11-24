import { configureStore } from "@reduxjs/toolkit";
import { vendorsReducer } from "@/redux/store/vendors";
import { counterSlice } from "@/redux/store/counter";

export const store = configureStore({
  reducer: {
    vendors: vendorsReducer.reducer,
    pageNumber: counterSlice.reducer,
  },
});
