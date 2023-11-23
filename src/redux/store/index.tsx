import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "@/redux/store/restaurants";

export const store = configureStore({
  reducer: {
    items: restaurantsSlice.reducer,
  },
});
